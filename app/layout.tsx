import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Yene Coffee - Premium Ethiopian Coffee',
  description:
    'Experience the finest Ethiopian coffee at Yene Coffee. Specialty coffee, cozy atmosphere, and authentic craftsmanship in Brooklyn.',
  generator: 'v0.app',
  keywords: ['coffee', 'Ethiopian coffee', 'specialty coffee', 'cafe', 'Brooklyn'],
  openGraph: {
    title: 'Yene Coffee - Premium Ethiopian Coffee',
    description: 'Experience the finest Ethiopian coffee in Brooklyn',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#6b4423',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
