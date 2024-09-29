import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Equipare',
  description: 'Ajudando a reduzir a desigualdade salarial no Brasil',
};

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <head>
        <link rel='icon' href='/favicon.png' />
      </head>
      <html lang='pt-br'>
        <body className={cn(inter.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
