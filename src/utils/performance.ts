// Performance utilities
export const isLowEndDevice = () => {
  // Check if device has limited resources
  const connection = (navigator as any).connection;
  const memory = (performance as any).memory;
  
  // Check for slow connection
  const slowConnection = connection && (
    connection.effectiveType === 'slow-2g' || 
    connection.effectiveType === '2g' ||
    connection.saveData
  );
  
  // Check for limited memory (less than 4GB)
  const limitedMemory = memory && memory.jsHeapSizeLimit < 4000000000;
  
  // Check for older devices
  const oldDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
  
  return slowConnection || limitedMemory || oldDevice;
};

export const getAnimationConfig = () => {
  const isLowEnd = isLowEndDevice();
  
  return {
    // Reduce animation duration for low-end devices
    duration: isLowEnd ? 0.3 : 0.6,
    // Disable complex animations
    enableComplexAnimations: !isLowEnd,
    // Reduce stagger delay
    staggerDelay: isLowEnd ? 0.05 : 0.1,
    // Disable blur effects on low-end devices
    enableBlur: !isLowEnd,
  };
};
