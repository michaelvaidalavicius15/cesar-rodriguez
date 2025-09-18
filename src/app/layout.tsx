// layout.tsx
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
  openGraph: {
    title: 'Ayuda para Cesar - Recuperar mi vida y caminar de nuevo',
    description: 'Ayuda a Cesar a recaudar fondos para su cirugía de neuroestimulación',
    type: 'website',
    locale: 'es_UY',
    alternateLocale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayuda para Cesar - Recuperar mi vida y caminar de nuevo',
    description: 'Ayuda a Cesar a recaudar fondos para su cirugía de neuroestimulación',
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
            </div>
            <div className="relative z-10">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}