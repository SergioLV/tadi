import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1E3A8A',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://eligeunplan.cl'),
  title: {
    default: 'Elige un Plan | Evalúa tu Isapre Gratis en Chile',
    template: '%s | Elige un Plan',
  },
  description:
    'Evalúa y compara planes de Isapre en Chile gratis. Te ayudamos a reducir costos y mejorar tu cobertura de salud. Asesoría personalizada, confidencial y sin compromiso.',
  keywords: [
    'isapre',
    'evaluar isapre',
    'comparar isapres',
    'cambiar de isapre',
    'planes de isapre chile',
    'mejor isapre',
    'banmedica',
    'colmena',
    'cruz blanca',
    'consalud',
    'vida tres',
    'asesoria isapre gratis',
    'elige un plan',
  ],
  authors: [{ name: 'Elige un Plan', url: 'https://eligeunplan.cl' }],
  creator: 'Elige un Plan',
  publisher: 'Elige un Plan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://eligeunplan.cl',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://eligeunplan.cl',
    siteName: 'Elige un Plan',
    title: 'Elige un Plan | Evalúa tu Isapre Gratis',
    description: 'Te ayudamos a reducir costos y mejorar tu cobertura de salud. Asesoría gratuita y sin compromiso.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elige un Plan - Evaluación Gratuita de Isapres',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elige un Plan | Evalúa tu Isapre Gratis',
    description: 'Reduce costos y mejora tu cobertura de salud. Asesoría gratuita.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-google-search-console',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Elige un Plan',
  description: 'Asesoría gratuita para evaluar y comparar planes de Isapre en Chile.',
  url: 'https://eligeunplan.cl',
  telephone: '+56912345678',
  email: 'contacto@eligeunplan.cl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  areaServed: { '@type': 'Country', name: 'Chile' },
  serviceType: ['Asesoría en Isapres', 'Comparación de planes de salud'],
  priceRange: 'Gratis',
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Evaluación de Isapre',
  description: 'Servicio gratuito de evaluación y comparación de planes de Isapre en Chile.',
  provider: { '@type': 'Organization', name: 'Elige un Plan' },
  areaServed: { '@type': 'Country', name: 'Chile' },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CLP',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="canonical" href="https://eligeunplan.cl" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
