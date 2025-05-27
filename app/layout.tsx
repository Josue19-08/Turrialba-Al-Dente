import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Turrialba Al Dente',
  description: 'Sitio web oficial de Turrialba Al Dente, el sabor auténtico de las montañas.',
  generator: 'Next.js',
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
