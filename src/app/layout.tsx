import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/main-header/MainHeader';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
