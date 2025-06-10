import type { Metadata } from 'next';
import '@/styles';

export const metadata: Metadata = {
  title: '집가고싶다',
  description: '과연 어떤 단체의 집가고 싶어 파워가 가장 강력할까?',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
