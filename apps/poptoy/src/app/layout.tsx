import type { Metadata } from 'next';
import '@/styles';
import GoogleAnalytics from '@/lib/GA';
import { GA_TRACKING_ID } from '@/lib/config/env';
import Head from 'next/head';

export const metadata: Metadata = {
  title: '집가고싶다',
  description: '과연 어떤 단체의 집가고 싶어 파워가 가장 강력할까?',
  icons: {
    icon: '/favicon/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      {GA_TRACKING_ID && <GoogleAnalytics />}
      <body>{children}</body>
    </html>
  );
}
