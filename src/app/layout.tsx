import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://isapre360.cl'),
  title: {
    default: 'Isapre360 | Elige tu Isapre sin perderte en la letra chica',
    template: '%s | Isapre360',
  },
  description:
    'Gustavo, profesional de la salud, te ayuda a cotizar, comparar y elegir el mejor plan de Isapre para ti y tu familia. Asesoría personalizada sin compromiso.',
  keywords: [
    'isapre',
    'isapre360',
    'asesor isapre',
    'cotizar isapre',
    'comparar isapres',
    'cambiar isapre',
    'planes de salud chile',
    'fonasa vs isapre',
    'mejor isapre chile',
    'asesoría isapre gratis',
  ],
  authors: [{ name: 'Isapre360 - Gustavo' }],
  creator: 'Isapre360',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://isapre360.cl',
    siteName: 'Isapre360',
    title: 'Isapre360 | Elige tu Isapre sin perderte en la letra chica',
    description:
      'Gustavo te ayuda a cotizar, comparar y elegir el mejor plan de Isapre. Asesoría personalizada sin compromiso.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Isapre360 - Asesoría en Isapres' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isapre360 | Elige tu Isapre sin letra chica',
    description: 'Asesoría personalizada para elegir tu plan de Isapre en Chile.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'tu-codigo-de-verificacion',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Isapre360',
  description: 'Asesoría personalizada en planes de Isapre en Chile. Gustavo, profesional de la salud, te ayuda a cotizar, comparar y elegir el mejor plan.',
  url: 'https://isapre360.cl',
  telephone: '+56912345678',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  serviceType: ['Asesoría en Isapres', 'Comparación de planes de salud', 'Cambio de Isapre'],
  priceRange: 'Gratis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="canonical" href="https://isapre360.cl" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
