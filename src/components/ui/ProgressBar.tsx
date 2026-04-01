'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'

// Minimal inline styles
const style = `
#nprogress { pointer-events: none; }
#nprogress .bar {
  background: rgba(255,255,255,0.7);
  position: fixed;
  z-index: 9999;
  top: 0; left: 0;
  width: 100%; height: 2px;
}
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0; width: 100px; height: 100%;
  box-shadow: 0 0 10px rgba(255,255,255,0.6), 0 0 5px rgba(255,255,255,0.6);
  opacity: 1;
  transform: rotate(3deg) translate(0, -4px);
}
`

NProgress.configure({ showSpinner: false, trickleSpeed: 200 })

export function ProgressBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.done()
  }, [pathname, searchParams])

  useEffect(() => {
    NProgress.start()
    return () => { NProgress.done() }
  }, [])

  return <style>{style}</style>
}
