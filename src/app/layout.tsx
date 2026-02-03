import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://isapre360.cl'),
  title: {
    default: 'Isapre360 | Asesoría en Planes de Salud en Chile',
    template: '%s | Isapre360',
  },
  description:
    'Asesoría profesional en planes de Isapre en Chile. Te ayudamos a elegir el mejor plan de salud para ti y tu familia. Comparamos todas las Isapres del mercado.',
  keywords: [
    'isapre',
    'isapre360',
    'asesor isapre',
    'planes de salud chile',
    'comparar isapres',
    'asesoría isapre',
    'salud chile',
    'fonasa vs isapre',
    'mejor isapre chile',
  ],
  authors: [{ name: 'Isapre360' }],
  creator: 'Isapre360',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://isapre360.cl',
    siteName: 'Isapre360',
    title: 'Isapre360 | Asesoría en Planes de Salud en Chile',
    description:
      'Asesoría profesional en planes de Isapre en Chile. Te ayudamos a elegir el mejor plan de salud.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Isapre360' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isapre360 | Asesoría en Planes de Salud',
    description: 'Asesoría profesional en planes de Isapre en Chile.',
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
  '@type': 'LocalBusiness',
  name: 'Isapre360',
  description: 'Asesoría profesional en planes de Isapre en Chile',
  url: 'https://isapre360.cl',
  telephone: '+56912345678',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  areaServed: 'Chile',
  serviceType: 'Asesoría en Isapres',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="canonical" href="https://isapre360.cl" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
