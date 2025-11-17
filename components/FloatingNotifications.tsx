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

// Define zones for mobile (3 zones for cleaner layout)
const getMobileZones = (): Zone[] => [
  { id: 1, centerX: 15, centerY: 20, available: true },   // Top Left
  { id: 2, centerX: 85, centerY: 50, available: true },   // Middle Right
  { id: 3, centerX: 15, centerY: 80, available: true },   // Bottom Left
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
  visibleDuration: 4000, // Longer visible duration for less frantic feel
  fadeOutDuration: 800, // Faster fade out
  delayBetweenSpawns: 2500, // 2.5 seconds between spawns
  maxConcurrent: 1, // Only one at a time for smoother feel
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

      // For mobile, add fade-out class before removing
      if (isMobile) {
        // Start fade out slightly before removal
        setTimeout(() => {
          const element = document.querySelector(`[data-notification-id="${notification.id}"]`);
          if (element) {
            element.classList.add('notification-fade-out');
          }
        }, visibleDuration - 800);
      }

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

  // Mobile simplified scheduler - one notification at a time
  useEffect(() => {
    if (!isMobile || zonesRef.current.length === 0) return;

    const {
      visibleDuration,
      fadeOutDuration,
      delayBetweenSpawns,
    } = mobileConfig;

    let cancelled = false;
    let currentZoneIndex = 0;
    const timers: NodeJS.Timeout[] = [];

    const spawnNext = () => {
      if (cancelled) return;

      const availableZones = zonesRef.current.filter(z => z.available);
      
      if (availableZones.length === 0) {
        // Wait and try again
        const retryTimer = setTimeout(spawnNext, delayBetweenSpawns);
        timers.push(retryTimer);
        return;
      }

      // Cycle through zones
      const zone = availableZones[currentZoneIndex % availableZones.length];
      currentZoneIndex = (currentZoneIndex + 1) % availableZones.length;

      spawnNotification(zone, visibleDuration, () => {
        // After notification fades out, wait then spawn next
        if (!cancelled) {
          const nextTimer = setTimeout(spawnNext, delayBetweenSpawns);
          timers.push(nextTimer);
        }
      });
    };

    // Start first notification after initial delay
    const initialTimer = setTimeout(spawnNext, 1000);
    timers.push(initialTimer);

    return () => {
      cancelled = true;
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [zoneResetKey, isMobile, spawnNotification]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {isMobile ? (
        // Mobile: Simple CSS transitions for better performance
        <>
          {Array.from(notifications.values()).map(notification => (
            <div
              key={notification.id}
              data-notification-id={notification.id}
              className="absolute notification-fade-in"
              style={{
                left: `${notification.x}%`,
                top: `${notification.y}%`,
                willChange: 'opacity',
              }}
            >
              <div className="bg-gradient-to-br from-blue-50/[0.035] to-blue-100/[0.045] backdrop-blur-sm rounded-md px-2.5 py-1.5 shadow-sm shadow-blue-100/15">
                {/* Tinted Glass Company Name - More Subtle */}
                <div 
                  className="text-xs font-medium text-blue-300/60 mb-0.5 tracking-wide"
                  style={{ 
                    filter: 'blur(1.5px)',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                  }}
                >
                  {notification.companyName}
                </div>
                
                {/* Visibility Score - Clear and Vibrant */}
                <div className="text-[11px] font-semibold text-blue-400">
                  +{notification.percentage}% visibility score
                </div>
              </div>
            </div>
          ))}
          <style jsx global>{`
            @keyframes fadeInMobile {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
            @keyframes fadeOutMobile {
              from {
                opacity: 1;
              }
              to {
                opacity: 0;
              }
            }
            .notification-fade-in {
              animation: fadeInMobile 0.8s ease-out forwards;
            }
            .notification-fade-out {
              animation: fadeOutMobile 0.8s ease-in forwards;
            }
          `}</style>
        </>
      ) : (
        // Desktop: Framer Motion for smooth animations
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
              <div className="bg-gradient-to-br from-blue-50/[0.05] to-blue-100/[0.06] backdrop-blur-md rounded-md px-5 py-2.5 sm:px-8 sm:py-4 shadow-lg shadow-blue-100/10">
                {/* Tinted Glass Company Name - Heavily Obscured */}
                <div 
                  className="text-base sm:text-lg md:text-xl font-medium text-blue-300/60 mb-1 tracking-wider"
                  style={{ 
                    filter: 'blur(3px)',
                    userSelect: 'none',
                    WebkitUserSelect: 'none',
                  }}
                >
                  {notification.companyName}
                </div>
                
                {/* Visibility Score - Clear and Vibrant */}
                <div className="text-sm sm:text-base font-semibold text-blue-400">
                  +{notification.percentage}% visibility score
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      )}
    </div>
  );
}
