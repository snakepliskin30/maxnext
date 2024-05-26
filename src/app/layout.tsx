import { Inter, Montserrat } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/main-header/MainHeader';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

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
      <body className={`${montserrat.variable}`}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
