import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ayuda para Cesar - Recuperar mi vida y caminar de nuevo',
  description: 'Ayuda a Cesar Maicol Rodriguez Salvia a recaudar fondos para su cirugía de neuroestimulación. Con tu apoyo puede recuperar la movilidad y vivir sin dolor.',
  keywords: 'donaciones, ayuda médica, neuroestimulación, lesión medular, Uruguay, crowdfunding',
  authors: [{ name: 'Cesar Maicol Rodriguez Salvia' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#3b82f6',
  openGraph: {
    title: 'Ayuda para Cesar - Recuperar mi vida y caminar de nuevo',
    description: 'Ayuda a Cesar a recaudar fondos para su cirugía de neuroestimulación. ¡Con tu apoyo, puede volver a caminar!',
    url: 'https://unidos-por-cesar.vercel.app/', // Reemplaza con tu dominio real
    siteName: 'Ayuda para Cesar',
    type: 'website',
    locale: 'es_UY',
    alternateLocale: 'pt_BR',
    images: [
      {
        url: 'https://unidos-por-cesar.vercel.app/og-image.jpg', // Usa URL absoluta
        secureUrl: 'https://unidos-por-cesar.vercel.app/og-image.jpg',
        width: 1200,
        height: 1200,
        alt: 'Apoya a Cesar Maicol Rodriguez Salvia para recuperar su movilidad',
        type: 'image/jpeg', // Cambia a 'image/png' si usas PNG
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayuda para Cesar - Recuperar mi vida y caminar de nuevo',
    description: 'Ayuda a Cesar a recaudar fondos para su cirugía de neuroestimulación.',
    images: ['https://unidos-por-cesar.vercel.app/og-image.jpg'], // URL absoluta
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  // Metaetiquetas adicionales para LinkedIn y otras plataformas
  other: {
    'msapplication-TileImage': '/ms-icon.png', // Para Windows Tiles (opcional, 144x144)
    'og:image:secure_url': 'https://unidos-por-cesar.vercel.app/og-image.jpg', // Compatibilidad adicional
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen relative overflow-hidden">
            {/* Enhanced Background with Multiple Layers */}
            <div className="fixed inset-0 z-0">
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/80 to-indigo-100/60"></div>
              
              {/* Animated background orbs with better contrast */}
              <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-radial from-purple-300/40 via-purple-200/20 to-transparent rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
              
              <div className="absolute top-40 right-20 w-80 h-80 bg-gradient-radial from-blue-300/50 via-blue-200/25 to-transparent rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-2000"></div>
              
              <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-radial from-indigo-300/40 via-indigo-200/20 to-transparent rounded-full mix-blend-multiply filter blur-xl animate-float animation-delay-4000"></div>
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-pink-200/30 via-purple-100/15 to-transparent rounded-full mix-blend-multiply filter blur-2xl animate-pulse"></div>
              
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-white/30"></div>
            </div>
            
            {/* Content with proper z-index */}
            <div className="relative z-10">
              <Header />
              <main className="relative">
                {children}
              </main>
              <Footer />
            </div>
            
            {/* Barra superior mejorada que combina con la nueva paleta */}
            <div className="top-bar-improved"></div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}