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
          <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <Header />
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}