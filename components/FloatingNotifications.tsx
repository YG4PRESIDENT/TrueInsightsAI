"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Notification {
  id: string;
  companyName: string;
  percentage: number;
  x: number;
  y: number;
  zoneId: number;
}

interface Zone {
  id: number;
  centerX: number;
  centerY: number;
  available: boolean;
}

// Generate realistic company name formats
const generateCompanyName = () => {
  const prefixes = [
    "Tech", "Data", "Cloud", "Smart", "Digital", "Cyber", "Quantum", "Nova",
    "Apex", "Prime", "Global", "Vertex", "Nexus", "Summit", "Core", "Elite"
  ];
  const middles = [
    "Flow", "Stream", "Scale", "Wave", "Sync", "Link", "Net", "Pulse",
    "Spark", "Flex", "Hub", "Labs", "Shift", "Edge", "Drive", "Forge"
  ];
  const suffixes = [
    "Solutions", "Systems", "Technologies", "Corp", "Inc", "Group",
    "Ventures", "Partners", "Dynamics", "Industries", "Enterprises", "Co"
  ];

  const useThreeWords = Math.random() > 0.4;
  
  if (useThreeWords) {
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]}${middles[Math.floor(Math.random() * middles.length)]} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
  } else {
    return `${prefixes[Math.floor(Math.random() * prefixes.length)]} ${suffixes[Math.floor(Math.random() * suffixes.length)]}`;
  }
};

// Define zones for desktop (6 zones matching user's layout)
const getDesktopZones = (): Zone[] => [
  { id: 1, centerX: 12, centerY: 20, available: true },   // Zone 1: Top Left
  { id: 2, centerX: 45, centerY: 12, available: true },   // Zone 2: Top Center
  { id: 3, centerX: 88, centerY: 20, available: true },   // Zone 3: Top Right
  { id: 4, centerX: 88, centerY: 78, available: true },   // Zone 4: Bottom Right
  { id: 5, centerX: 50, centerY: 82, available: true },   // Zone 5: Bottom Center
  { id: 6, centerX: 12, centerY: 78, available: true },   // Zone 6: Bottom Left
];

// Define zones for mobile (4 slim vertical tiers)
const getMobileZones = (): Zone[] => [
  { id: 1, centerX: 14, centerY: 18, available: true },   // Top Left
  { id: 2, centerX: 86, centerY: 32, available: true },   // Upper Right
  { id: 3, centerX: 86, centerY: 78, available: true },   // Bottom Right
  { id: 4, centerX: 18, centerY: 86, available: true },   // Bottom Left
];

const desktopConfig = {
  visibleDuration: 3500,
  fadeOutDuration: 1500,
  gapBetweenWaves: 1000,
  minPerWave: 4,
  maxPerWave: 5,
  staggerRange: 1500,
};

const mobileConfig = {
  visibleDuration: 2600,
  restAfterComplete: 700,
  minDelayBetweenSpawns: 900,
  maxDelayBetweenSpawns: 1500,
  maxConcurrent: 2,
};

// Add small random offset within zone for variety
const addRandomOffset = (center: number, range: number = 3): number => {
  return center + (Math.random() * range * 2 - range);
};

export default function FloatingNotifications() {
  const [notifications, setNotifications] = useState<Map<string, Notification>>(new Map());
  const [isMobile, setIsMobile] = useState(false);
  const [zoneResetKey, setZoneResetKey] = useState(0);
  const zonesRef = useRef<Zone[]>([]);
  const lastModeRef = useRef<boolean | null>(null);

  // Detect mobile viewport and initialize zones
  useEffect(() => {
    const applyZones = (mobile: boolean) => {
      zonesRef.current = mobile ? getMobileZones() : getDesktopZones();
      setZoneResetKey((prev) => prev + 1);
      setNotifications(new Map());
    };

    const checkMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      if (lastModeRef.current === null || lastModeRef.current !== mobile) {
        lastModeRef.current = mobile;
        applyZones(mobile);
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mark zone as available/occupied
  const updateZoneAvailability = useCallback((zoneId: number, available: boolean) => {
    zonesRef.current = zonesRef.current.map(zone =>
      zone.id === zoneId ? { ...zone, available } : zone
    );
  }, []);

  // Create a notification in a specific zone
  const createNotification = useCallback((zone: Zone, mobile: boolean): Notification => {
    const id = `notification-${Date.now()}-${Math.random()}`;
    
    return {
      id,
      companyName: generateCompanyName(),
      percentage: Math.floor(Math.random() * 45) + 1,
      x: addRandomOffset(zone.centerX, mobile ? 2 : 3),
      y: addRandomOffset(zone.centerY, mobile ? 2 : 3),
      zoneId: zone.id
    };
  }, []);

  // Spawn a notification in a specific zone
  const spawnNotification = useCallback(
    (zone: Zone, visibleDuration: number, onComplete?: () => void) => {
      const notification = createNotification(zone, isMobile);
    
      // Mark zone as occupied
      updateZoneAvailability(zone.id, false);
    
      // Add notification
      setNotifications(prev => {
        const newMap = new Map(prev);
        newMap.set(notification.id, notification);
        return newMap;
      });

      // Remove after duration and free the zone
      const timeoutId = setTimeout(() => {
        setNotifications(current => {
          const updatedMap = new Map(current);
          updatedMap.delete(notification.id);
          return updatedMap;
        });
      
        // Mark zone as available again
        updateZoneAvailability(zone.id, true);
        onComplete?.();
      }, visibleDuration);

      return timeoutId;
    },
    [createNotification, updateZoneAvailability, isMobile]
  );

  // Desktop wave-based spawning
  useEffect(() => {
    if (isMobile || zonesRef.current.length === 0) return;

    const {
      visibleDuration,
      fadeOutDuration,
      gapBetweenWaves,
      minPerWave,
      maxPerWave,
      staggerRange,
    } = desktopConfig;
    
    const spawnWave = () => {
      const timers: NodeJS.Timeout[] = [];
      
      // Get available zones
      const availableZones = zonesRef.current.filter(z => z.available);

      if (availableZones.length === 0) {
        return timers;
      }
      
      // Randomly select zones for this wave
      const perWaveCount =
        Math.floor(Math.random() * (maxPerWave - minPerWave + 1)) + minPerWave;
      const selectedZones = [...availableZones]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(perWaveCount, availableZones.length));
      
      // Spawn notifications in selected zones with random staggered timing for fluid feel
      selectedZones.forEach((zone, index) => {
        const staggerDelay = Math.random() * staggerRange;
        const timer = setTimeout(() => {
          spawnNotification(zone, visibleDuration);
        }, staggerDelay);
        timers.push(timer);
      });
      
      return timers;
    };
    
    // Start first wave
    let timers = spawnWave();
    
    // Calculate total wave cycle time
    const waveCycle = visibleDuration + fadeOutDuration + gapBetweenWaves;
    
    // Schedule subsequent waves
    const waveInterval = setInterval(() => {
      timers = [...timers, ...spawnWave()];
    }, waveCycle);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(waveInterval);
    };
  }, [zoneResetKey, isMobile, spawnNotification]);

  // Mobile sequential scheduler
  useEffect(() => {
    if (!isMobile || zonesRef.current.length === 0) return;

    const {
      visibleDuration,
      restAfterComplete,
      minDelayBetweenSpawns,
      maxDelayBetweenSpawns,
      maxConcurrent,
    } = mobileConfig;

    let activeCount = 0;
    let cancelled = false;
    const timers: NodeJS.Timeout[] = [];
    const zoneOrder = zonesRef.current.map(zone => zone.id);
    let zonePointer = 0;

    const getNextAvailableZone = (): Zone | null => {
      for (let i = 0; i < zoneOrder.length; i++) {
        const candidateId = zoneOrder[(zonePointer + i) % zoneOrder.length];
        const zone = zonesRef.current.find(z => z.id === candidateId);
        if (zone && zone.available) {
          zonePointer = (zonePointer + i + 1) % zoneOrder.length;
          return zone;
        }
      }
      return null;
    };

    const scheduleNext = () => {
      if (cancelled) return;
      if (activeCount >= maxConcurrent) return;

      const zone = getNextAvailableZone();

      if (!zone) {
        const waitTimer = setTimeout(scheduleNext, restAfterComplete);
        timers.push(waitTimer);
        return;
      }

      activeCount += 1;

      spawnNotification(zone, visibleDuration, () => {
        activeCount = Math.max(0, activeCount - 1);
        if (!cancelled) {
          const restTimer = setTimeout(scheduleNext, restAfterComplete);
          timers.push(restTimer);
        }
      });

      const delay =
        minDelayBetweenSpawns +
        Math.random() * (maxDelayBetweenSpawns - minDelayBetweenSpawns);
      const delayTimer = setTimeout(scheduleNext, delay);
      timers.push(delayTimer);
    };

    // Kick off initial schedules
    const initialTimer = setTimeout(scheduleNext, 300);
    const secondTimer = setTimeout(scheduleNext, 900);
    timers.push(initialTimer, secondTimer);

    return () => {
      cancelled = true;
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [zoneResetKey, isMobile, spawnNotification]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {Array.from(notifications.values()).map(notification => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="absolute"
            style={{
              left: `${notification.x}%`,
              top: `${notification.y}%`,
            }}
          >
            <div
              className={
                isMobile
                  ? "bg-gradient-to-br from-blue-50/[0.04] to-blue-100/[0.05] backdrop-blur-md rounded-md px-3 py-1.5 shadow-md shadow-blue-100/20"
                  : "bg-gradient-to-br from-blue-50/[0.05] to-blue-100/[0.06] backdrop-blur-md rounded-md px-5 py-2.5 sm:px-8 sm:py-4 shadow-lg shadow-blue-100/10"
              }
            >
              {/* Tinted Glass Company Name - Heavily Obscured */}
              <div 
                className={
                  isMobile
                    ? "text-sm font-medium text-blue-300/70 mb-0.5 tracking-wide"
                    : "text-base sm:text-lg md:text-xl font-medium text-blue-300/60 mb-1 tracking-wider"
                }
                style={{ 
                  filter: isMobile ? 'blur(2.4px)' : 'blur(3px)',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                }}
              >
                {notification.companyName}
              </div>
              
              {/* Visibility Score - Clear and Vibrant */}
              <div
                className={
                  isMobile
                    ? "text-xs font-semibold text-blue-400"
                    : "text-sm sm:text-base font-semibold text-blue-400"
                }
              >
                +{notification.percentage}% visibility score
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
