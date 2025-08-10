import './globals.css'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata = {
  title: 'Shivang - Portfolio',
  description: 'Full Stack Developer Portfolio',
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  )
}
