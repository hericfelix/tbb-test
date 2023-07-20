import { useEffect, useState } from 'react';

export type DeviceTypes = 'mobile' | 'tablet' | 'desktop';

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<DeviceTypes>('desktop');

  const updateDeviceType = () => {
    const { innerWidth } = window;
    if (innerWidth < 768) {
      setDeviceType('mobile');
    } else if (innerWidth < 1024) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    updateDeviceType();

    window.addEventListener('resize', updateDeviceType);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return deviceType;
};
