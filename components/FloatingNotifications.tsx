"use client";

import { useState, useEffect, useCallback } from "react";
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

// Define zones for mobile (simpler 4-zone layout)
const getMobileZones = (): Zone[] => [
  { id: 1, centerX: 12, centerY: 15, available: true },   // Top Left
  { id: 2, centerX: 88, centerY: 15, available: true },   // Top Right
  { id: 3, centerX: 88, centerY: 82, available: true },   // Bottom Right
  { id: 4, centerX: 12, centerY: 82, available: true },   // Bottom Left
];

// Add small random offset within zone for variety
const addRandomOffset = (center: number, range: number = 3): number => {
  return center + (Math.random() * range * 2 - range);
};

export default function FloatingNotifications() {
  const [notifications, setNotifications] = useState<Map<string, Notification>>(new Map());
  const [zones, setZones] = useState<Zone[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport and initialize zones
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 640;
      setIsMobile(mobile);
      setZones(mobile ? getMobileZones() : getDesktopZones());
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mark zone as available/occupied
  const updateZoneAvailability = useCallback((zoneId: number, available: boolean) => {
    setZones(prev => prev.map(zone => 
      zone.id === zoneId ? { ...zone, available } : zone
    ));
  }, []);

  // Create a notification in a specific zone
  const createNotification = useCallback((zone: Zone): Notification => {
    const id = `notification-${Date.now()}-${Math.random()}`;
    
    return {
      id,
      companyName: generateCompanyName(),
      percentage: Math.floor(Math.random() * 45) + 1,
      x: addRandomOffset(zone.centerX),
      y: addRandomOffset(zone.centerY),
      zoneId: zone.id
    };
  }, []);

  // Spawn a notification in a specific zone
  const spawnNotification = useCallback((zone: Zone, visibleDuration: number) => {
    const notification = createNotification(zone);
    
    // Mark zone as occupied
    updateZoneAvailability(zone.id, false);
    
    // Add notification
    setNotifications(prev => {
      const newMap = new Map(prev);
      newMap.set(notification.id, notification);
      return newMap;
    });

    // Remove after duration and free the zone
    setTimeout(() => {
      setNotifications(current => {
        const updatedMap = new Map(current);
        updatedMap.delete(notification.id);
        return updatedMap;
      });
      
      // Mark zone as available again
      updateZoneAvailability(zone.id, true);
    }, visibleDuration);
  }, [createNotification, updateZoneAvailability]);

  // Wave-based spawning with zone assignment
  useEffect(() => {
    if (zones.length === 0) return;

    // Use subset of zones per wave for variety (4-5 on desktop, 3 on mobile)
    const notificationCount = isMobile ? 3 : Math.floor(Math.random() * 2) + 4; // 4-5 on desktop
    const visibleDuration = 3500; // 3.5 seconds visible
    const fadeOutDuration = 1500; // 1.5 seconds to fade out
    const gapBetweenWaves = 1000; // 1 second gap
    
    const spawnWave = () => {
      const timers: NodeJS.Timeout[] = [];
      
      // Get available zones
      const availableZones = zones.filter(z => z.available);
      
      // Randomly select zones for this wave
      const selectedZones = [...availableZones]
        .sort(() => Math.random() - 0.5)
        .slice(0, Math.min(notificationCount, availableZones.length));
      
      // Spawn notifications in selected zones with random staggered timing for fluid feel
      selectedZones.forEach((zone, index) => {
        const staggerDelay = Math.random() * 1500; // Random 0-1.5s stagger for fluid appearance
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
    const waveCycle = visibleDuration + fadeOutDuration + gapBetweenWaves; // ~6 seconds total
    
    // Schedule subsequent waves
    const waveInterval = setInterval(() => {
      timers = spawnWave();
    }, waveCycle);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(waveInterval);
    };
  }, [zones, isMobile, spawnNotification]);

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
    </div>
  );
}
