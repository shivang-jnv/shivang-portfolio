'use client'
 
import { useReportWebVitals } from 'next/web-vitals'
 
export function WebVitalsReporter() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV !== 'development') return
    
    // Log to console in development
    const color = metric.value > metric.rating ? '#ef4444' : '#22c55e'
    console.groupCollapsed(`%c Web Vitals: ${metric.name}`, `color: ${color}; font-weight: bold;`)
    console.log(metric)
    console.groupEnd()
  })
 
  return null
}
