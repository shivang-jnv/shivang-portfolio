import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  title: 'Shivang Kanaujia — Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, Node.js and cloud-native systems.',
  keywords: 'Full Stack Developer, React, Next.js, TypeScript, Node.js, Web Development',
  authors: [{ name: 'Shivang Kanaujia' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Shivang Kanaujia — Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js and cloud-native systems.',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Shivang Kanaujia — Full Stack Developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivang Kanaujia — Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js and cloud-native systems.',
    images: ['/og-image.png'],
  },
}

import { ScrollProvider } from '../components/logic/ScrollManager'
import { LazyMotion, domAnimation } from "framer-motion"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { WebVitalsReporter } from '../components/logic/WebVitalsReporter'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`} suppressHydrationWarning={true}>
        <LazyMotion features={domAnimation}>
          <ScrollProvider>
            {children}
            <SpeedInsights />
            <WebVitalsReporter />
          </ScrollProvider>
        </LazyMotion>
      </body>
    </html>
  )
}
