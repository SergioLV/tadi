import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A2540',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://isapre360.cl'),
  title: {
    default: 'Isapre360 | Asesoría Gratuita para Elegir tu Isapre en Chile',
    template: '%s | Isapre360',
  },
  description:
    'Cotiza y compara planes de Isapre gratis con Gustavo, profesional de la salud. Te ayudamos a elegir el mejor plan para ti y tu familia sin letra chica ni presiones. Asesoría personalizada en Santiago y todo Chile.',
  keywords: [
    'isapre',
    'cotizar isapre',
    'comparar isapres',
    'cambiar de isapre',
    'asesor de isapre',
    'planes de isapre',
    'isapre chile',
    'mejor isapre',
    'fonasa o isapre',
    'isapre familiar',
    'banmedica',
    'colmena',
    'cruz blanca',
    'consalud',
    'vida tres',
    'nueva masvida',
    'asesoría isapre gratis',
    'comparador de isapres',
  ],
  authors: [{ name: 'Gustavo - Isapre360', url: 'https://isapre360.cl' }],
  creator: 'Isapre360',
  publisher: 'Isapre360',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://isapre360.cl',
    languages: {
      'es-CL': 'https://isapre360.cl',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://isapre360.cl',
    siteName: 'Isapre360',
    title: 'Isapre360 | Elige tu Isapre sin Letra Chica',
    description:
      'Cotiza gratis con Gustavo, profesional de la salud. Comparamos todas las Isapres y te ayudamos a elegir el mejor plan para ti.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Isapre360 - Asesoría Gratuita en Isapres',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Isapre360 | Asesoría Gratuita en Isapres',
    description: 'Cotiza y compara planes de Isapre gratis. Sin letra chica, sin presiones.',
    images: ['/og-image.jpg'],
    creator: '@isapre360',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-google-search-console',
  },
  category: 'health',
};

// Schema.org JSON-LD estructurado
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://isapre360.cl/#organization',
  name: 'Isapre360',
  alternateName: 'Isapre 360',
  description: 'Asesoría profesional y gratuita para cotizar, comparar y elegir planes de Isapre en Chile.',
  url: 'https://isapre360.cl',
  logo: 'https://isapre360.cl/logo.png',
  image: 'https://isapre360.cl/og-image.jpg',
  telephone: '+56912345678',
  email: 'contacto@isapre360.cl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.4489,
    longitude: -70.6693,
  },
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  serviceType: [
    'Asesoría en Isapres',
    'Comparación de planes de salud',
    'Cambio de Isapre',
    'Cotización de Isapre',
  ],
  priceRange: 'Gratis',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://www.instagram.com/isapre360',
    'https://www.facebook.com/isapre360',
  ],
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://isapre360.cl/#gustavo',
  name: 'Gustavo',
  jobTitle: 'Asesor de Isapres',
  description: 'Profesional de la salud especializado en asesoría de planes de Isapre en Chile.',
  worksFor: {
    '@id': 'https://isapre360.cl/#organization',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://isapre360.cl/#service',
  name: 'Asesoría en Isapres',
  description: 'Servicio gratuito de asesoría para cotizar, comparar y elegir el mejor plan de Isapre según tu situación.',
  provider: {
    '@id': 'https://isapre360.cl/#organization',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Chile',
  },
  serviceType: 'Asesoría en salud',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CLP',
    description: 'Asesoría completamente gratuita',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta la asesoría de Isapre360?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La asesoría es completamente gratuita. No cobramos nada por ayudarte a cotizar, comparar y elegir tu plan de Isapre.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funciona el servicio de Isapre360?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es muy simple: nos cuentas tu situación, comparamos todas las Isapres del mercado, te explicamos las opciones sin letra chica, y te acompañamos en todo el proceso de cambio si decides hacerlo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Trabajan con todas las Isapres de Chile?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, comparamos planes de todas las Isapres: Banmédica, Colmena, Cruz Blanca, Consalud, Vida Tres, Nueva Masvida y más. No trabajamos para ninguna Isapre en particular, trabajamos para ti.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo toma la asesoría?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La cotización inicial toma aproximadamente 15 minutos. Luego te contactamos para explicarte las opciones y responder tus dudas.',
      },
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: 'https://isapre360.cl',
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="canonical" href="https://isapre360.cl" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
