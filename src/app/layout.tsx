import '@/lib/http-interceptor';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'CertFlow',
  description:
    'Emissão de certificados on-line para sua empresa ou instituição. Não quebre mais a cabeça para emitir certificados, conte com a gente!!!'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
