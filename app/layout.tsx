import type { Metadata } from 'next';
import { Lora, Raleway } from 'next/font/google';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Haymon L Tate DDS | Lumberton, NC',
  description:
    'Haymon L Tate DDS provides trusted family, cosmetic, and general dentistry in Lumberton, NC. Gentle dental care for every smile — cleanings, implants, whitening, and more. Call today to schedule your appointment.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}