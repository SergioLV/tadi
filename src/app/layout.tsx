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
    default: 'Elige un Plan | Compara y Cambia de Isapre en Chile - Asesoría Gratis',
    template: '%s | Elige un Plan',
  },
  description:
    'Compara todas las Isapres de Chile y ahorra hasta $720.000 al año. Asesoría gratuita, personalizada y sin compromiso. Banmédica, Colmena, Cruz Blanca, Consalud y más. Evalúa tu plan hoy.',
  keywords: [
    'isapre chile',
    'comparar isapres',
    'cambiar de isapre',
    'evaluar isapre',
    'mejor isapre chile',
    'planes de isapre',
    'isapre más barata',
    'ahorrar en isapre',
    'banmedica',
    'colmena golden cross',
    'cruz blanca',
    'consalud',
    'vida tres',
    'nueva mas vida',
    'asesoria isapre gratis',
    'cotizar isapre',
    'plan de salud chile',
    'cobertura isapre',
    'precio isapre',
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
    title: 'Compara y Cambia de Isapre en Chile - Ahorra hasta $720.000 al año',
    description: 'Asesoría gratuita para comparar todas las Isapres de Chile. Encuentra el mejor plan según tu perfil y ahorra en tu salud. Sin compromiso.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elige un Plan - Compara Isapres y Ahorra en Chile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compara Isapres en Chile y Ahorra hasta $720.000 al año',
    description: 'Asesoría gratuita para encontrar el mejor plan de Isapre según tu perfil. Sin compromiso.',
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
  description: 'Asesoría gratuita para comparar y evaluar planes de Isapre en Chile. Ayudamos a miles de chilenos a ahorrar en su salud.',
  url: 'https://eligeunplan.cl',
  logo: 'https://eligeunplan.cl/logo.png',
  image: 'https://eligeunplan.cl/og-image.jpg',
  telephone: '+56912345678',
  email: 'contacto@eligeunplan.cl',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santiago',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  areaServed: { '@type': 'Country', name: 'Chile' },
  serviceType: ['Asesoría en Isapres', 'Comparación de planes de salud', 'Evaluación de cobertura médica'],
  priceRange: 'Gratis',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '150',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Evaluación y Comparación de Isapres',
  description: 'Servicio gratuito de evaluación y comparación de planes de Isapre en Chile. Asesoría personalizada para encontrar el mejor plan según tu perfil.',
  provider: { 
    '@type': 'Organization', 
    name: 'Elige un Plan',
    url: 'https://eligeunplan.cl',
  },
  areaServed: { '@type': 'Country', name: 'Chile' },
  serviceType: 'Asesoría en Salud',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CLP',
    availability: 'https://schema.org/InStock',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Isapres Disponibles',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Banmédica' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Colmena Golden Cross' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cruz Blanca' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Consalud' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vida Tres' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nueva Mas Vida' } },
    ],
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto cuesta el servicio de evaluación de Isapre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El servicio es 100% gratuito. No cobramos nada por evaluar tu Isapre actual y comparar opciones. Tampoco hay costos ocultos ni compromisos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto puedo ahorrar cambiando de Isapre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nuestros clientes ahorran en promedio entre $360.000 y $720.000 al año, dependiendo de su situación actual y el plan que elijan. Algunos casos pueden ahorrar incluso más.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué Isapres comparan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comparamos todas las Isapres de Chile: Banmédica, Colmena Golden Cross, Cruz Blanca, Consalud, Vida Tres y Nueva Mas Vida. Analizamos planes según tu perfil y necesidades.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto demora el proceso de evaluación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solo necesitas 2 minutos para completar el formulario. Luego, nuestro equipo te contacta en menos de 24 horas con las mejores opciones para tu caso.',
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL">
      <head>
        <link rel="canonical" href="https://eligeunplan.cl" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="preload"
          as="style"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
