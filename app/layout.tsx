import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Rexford Tenkorang — Backend Developer',
  description:
    'Backend Developer & Computer Science Student at KsTU. Building scalable systems and tech-integrated businesses.',
  keywords: [
    'backend developer',
    'computer science',
    'KsTU',
    'Ghana',
    'software engineer',
    'Rexford Tenkorang',
  ],
  authors: [{ name: 'Rexford Tenkorang' }],
  openGraph: {
    title: 'Rexford Tenkorang — Backend Developer',
    description:
      'Backend Developer & Computer Science Student at KsTU. Building scalable systems and tech-integrated businesses.',
    type: 'website',
    images: [
      {
        url: '/IMG_5160.JPG',
        width: 1200,
        height: 630,
        alt: 'Rexford Tenkorang — Backend Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rexford Tenkorang — Backend Developer',
    description:
      'Backend Developer & Computer Science Student at KsTU. Building scalable systems and tech-integrated businesses.',
    images: ['/IMG_5160.JPG'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-[#0a0a0a] text-[#f0f0f0] antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
