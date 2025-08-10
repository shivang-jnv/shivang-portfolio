import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shivang Kanaujia - Full Stack Developer',
  description: 'Full Stack Developer passionate about creating beautiful, functional web applications.',
  keywords: 'Full Stack Developer, React, Next.js, TypeScript, Web Development',
  authors: [{ name: 'Shivang Kanaujia' }],
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
  robots: 'index, follow',
  openGraph: {
    title: 'Shivang Kanaujia - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating beautiful, functional web applications.',
    type: 'website',
    locale: 'en_US',
  },
   twitter: {
    card: 'summary_large_image',
    title: 'Shivang Kanaujia - Full Stack Developer',
    description: 'Full Stack Developer passionate about creating beautiful, functional web applications.',
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
