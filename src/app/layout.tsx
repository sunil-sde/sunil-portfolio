import type { Metadata } from 'next'
import Head from 'next/head'
import { Inter, Roboto } from 'next/font/google'
import '../../global.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
// const roboto = Roboto({ 
//   subsets: ['latin'],
//   weight: '400'
// })
import Favicon from './favicon.png'; // https://github.com/vercel/next.js/discussions/50704

export const metadata: Metadata = {
  title: 'Sunil Maps',
  description: 'Generated by create next app, designed by Sunil',
  icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon_io/favicon-16x16.png"  />
      </head>
      <body className={`${inter.className} overflow-hidden`} >{children}</body>
    </html>
  )
}
