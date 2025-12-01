"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
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

// Define zones for mobile - notifications allowed everywhere EXCEPT center content area
// Center content area (yellow box in user's image) is protected: roughly y: 30-75%
// Multiple zones around the content: top and bottom only (removed side zones to prevent overlap)
// Edge padding (x: 20-80%) to prevent cutoff
const getMobileZones = (): Zone[] => [
  // Top area zones (above content) - y: 15-22% (safe above content)
  { id: 1, centerX: 25, centerY: 18, available: true },   // Top Left
  { id: 2, centerX: 50, centerY: 18, available: true },   // Top Center
  { id: 3, centerX: 75, centerY: 18, available: true },   // Top Right

  // Bottom area zones (below content) - y: 78-85% (safe below content)
  { id: 4, centerX: 25, centerY: 82, available: true },   // Bottom Left
  { id: 5, centerX: 50, centerY: 82, available: true },   // Bottom Center
  { id: 6, centerX: 75, centerY: 82, available: true },   // Bottom Right
];

const desktopConfig = {
  visibleDuration: 4000, // Increased from 3500ms
  fadeOutDuration: 1500,
  gapBetweenWaves: 1500, // Increased from 1000ms for less frequency
  minPerWave: 2, // Reduced from 4 for less clutter
  maxPerWave: 3, // Reduced from 5 for less clutter
  staggerRange: 2000, // Increased from 1500ms
};

const mobileConfig = {
  visibleDuration: 3500, // Increased from 3000ms
  fadeInDuration: 1400,
  fadeOutDuration: 1400,
  delayBetweenSpawns: 2500, // Increased from 1000ms for less frequency
  maxConcurrent: 1, // Reduced from 2 for better performance
};

// Add small random offset within zone for variety
const addRandomOffset = (center: number, range: number = 3): number => {
  return center + (Math.random() * range * 2 - range);
};

export default function FloatingNotifications() {
  const [notifications, setNotifications] = useState<Map<string, Notification>>(new Map());
  const [isMobile, setIsMobile] = useState(false);
  const [zoneResetKey, setZoneResetKey] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
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

  // Pause animations when page is not visible (tab switch, minimize)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
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

    // For mobile, use smaller offset and ensure we stay in safe zones
    const offsetRange = mobile ? 1.5 : 3;
    let x = addRandomOffset(zone.centerX, offsetRange);
    let y = addRandomOffset(zone.centerY, offsetRange);

    // Mobile safe zone enforcement: protect center content area (yellow box)
    // Content area: y: 30-75% (where headline, input, logos are)
    // Notifications only in top (y: 15-25%) or bottom (y: 78-88%)
    if (mobile) {
      // Clamp x to stay away from edges (20-80%) to prevent cutoff
      x = Math.max(20, Math.min(80, x));

      // Strict y enforcement - only top or bottom areas
      if (y > 25 && y < 78) {
        // In or near content area - push to nearest safe zone
        y = zone.centerY < 50 ? 18 : 82;
      }

      // Final clamp to ensure we stay in safe zones
      if (y <= 25) {
        y = Math.max(15, Math.min(25, y)); // Top safe zone
      } else {
        y = Math.max(78, Math.min(88, y)); // Bottom safe zone
      }
    }

    return {
      id,
      companyName: generateCompanyName(),
      percentage: Math.floor(Math.random() * 45) + 1,
      x,
      y,
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
        }, visibleDuration - mobileConfig.fadeOutDuration);
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
    if (isMobile || zonesRef.current.length === 0 || !isVisible) return;

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

  // Mobile scheduler - natural rhythm with 1 concurrent notification for better performance
  useEffect(() => {
    if (!isMobile || zonesRef.current.length === 0 || !isVisible) return;

    const {
      visibleDuration,
      fadeOutDuration,
      delayBetweenSpawns,
      maxConcurrent,
    } = mobileConfig;

    let cancelled = false;
    let currentZoneIndex = 0;
    let activeCount = 0;
    const timers: NodeJS.Timeout[] = [];

    const spawnNext = () => {
      if (cancelled) return;
      if (activeCount >= maxConcurrent) {
        // Wait a bit and try again
        const retryTimer = setTimeout(spawnNext, delayBetweenSpawns);
        timers.push(retryTimer);
        return;
      }

      const availableZones = zonesRef.current.filter(z => z.available);

      if (availableZones.length === 0) {
        // Wait and try again
        const retryTimer = setTimeout(spawnNext, delayBetweenSpawns);
        timers.push(retryTimer);
        return;
      }

      // Cycle through zones for natural distribution
      const zone = availableZones[currentZoneIndex % availableZones.length];
      currentZoneIndex = (currentZoneIndex + 1) % availableZones.length;

      activeCount += 1;

      spawnNotification(zone, visibleDuration, () => {
        activeCount = Math.max(0, activeCount - 1);
        // Continue the rhythm after fade out
        if (!cancelled) {
          const nextTimer = setTimeout(spawnNext, delayBetweenSpawns);
          timers.push(nextTimer);
        }
      });

      // Schedule next spawn for continuous flow
      const nextTimer = setTimeout(spawnNext, delayBetweenSpawns);
      timers.push(nextTimer);
    };

    // Start first notification after initial delay
    const initialTimer = setTimeout(spawnNext, 800);
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
              animation: fadeInMobile 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
            }
            .notification-fade-out {
              animation: fadeOutMobile 1.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
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
