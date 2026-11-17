import { Analytics } from '@vercel/analytics/next'
import { cookies } from 'next/headers'
import type { Metadata, Viewport } from 'next'
import { parseConsentCookie } from '@/components/sitc/consent'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Psychology & Counselling | SITC Campus',
    template: '%s | SITC Campus',
  },
  description: 'Explore the Psychology & Counselling degree pathway, curriculum, entry guidance and brochure-listed fees from SITC Campus.',
  applicationName: 'SITC Campus',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/sitc/sitc-campus-logo.jpg', type: 'image/jpeg' }],
    apple: '/sitc/sitc-campus-logo.jpg',
  },
  openGraph: {
    type: 'website',
    siteName: 'SITC Campus',
    title: 'Psychology & Counselling | SITC Campus',
    description: 'Programme information, entry guidance and student life at SITC Campus.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f1e8',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const consent = parseConsentCookie((await cookies()).get('sitc-consent')?.value)

  return (
    <html lang="en-LK" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && consent.analyticsAllowed ? <Analytics /> : null}
      </body>
    </html>
  )
}
