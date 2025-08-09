// utils/performance.ts
export const trackPerformanceMetrics = () => {
  if (typeof window === 'undefined') return;

  // Track Core Web Vitals and performance metrics
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      switch (entry.entryType) {
        case 'navigation':
          console.log(`Page Load Time: ${Math.round(entry.duration)}ms`);
          console.log(`DOM Content Loaded: ${Math.round((entry as PerformanceNavigationTiming).domContentLoadedEventEnd - (entry as PerformanceNavigationTiming).domContentLoadedEventStart)}ms`);
          break;
        
        case 'paint':
          console.log(`${entry.name}: ${Math.round(entry.startTime)}ms`);
          break;
        
        case 'largest-contentful-paint':
          console.log(`Largest Contentful Paint: ${Math.round(entry.startTime)}ms`);
          break;
      }
    });
  });

  observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });

  // Track bundle size and network info
  if ('connection' in navigator) {
    const connection = (navigator as any).connection;
    console.log(`Network: ${connection.effectiveType}`);
    console.log(`Downlink: ${connection.downlink}Mbps`);
  }
};

// Component render time measurement
export const measureComponentRender = (componentName: string) => {
  const start = performance.now();
  
  return {
    startTime: start,
    measureEnd: () => {
      const end = performance.now();
      console.log(`⚡ ${componentName} render time: ${Math.round(end - start)}ms`);
    }
  };
};

// Track animation performance
export const trackAnimationPerformance = () => {
  if (typeof window === 'undefined') return;
  
  let frameCount = 0;
  let lastTime = performance.now();
  
  const measureFPS = () => {
    frameCount++;
    const currentTime = performance.now();
    
    if (currentTime - lastTime >= 1000) {
      console.log(`Average FPS: ${frameCount}`);
      frameCount = 0;
      lastTime = currentTime;
    }
    
    requestAnimationFrame(measureFPS);
  };
  
  requestAnimationFrame(measureFPS);
};
