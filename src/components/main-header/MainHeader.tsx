'use client';

import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import MainHeaderBackground from './MainHeaderBackground';

const nav = [
  {
    href: '/meals',
    label: 'Browse Meals',
  },
  {
    href: '/community',
    label: 'Foodies Commnunity',
  },
];

const MainHeader = () => {
  const path = usePathname();
  console.log('path', path);

  return (
    <>
      <MainHeaderBackground />
      <header className='flex justify-between items-center py-8 px-4 md:py-4 md:px-[10%]'>
        <Link
          href='/'
          className='flex items-center justify-center gap-8 text-[#ddd6cb] font-bold tracking-[.15rem] uppercase text-2xl'
        >
          <Image
            src={logoImg}
            alt='a plate with food'
            className='size-20 object-contain drop-shadow-xl'
          />
          NextLevel Food
        </Link>

        <nav>
          <ul className='flex gap-[1.5rem] text-xl'>
            {nav.map((e) => (
              <li key={e.href}>
                <Link
                  href={e.href}
                  className={cn(
                    'text-[#ddd6cb] font-semibold py-2 px-4 rounded-lg hover:bg-gradient-to-t hover:from-[#ff8a05] hover:to-[#f9b331] hover:shadow-xl hover:text-transparent hover:bg-clip-text',
                    {
                      'bg-gradient-to-t from-[#ff8a05] to-[#f9b331] shadow-xl text-transparent bg-clip-text':
                        path === e.href,
                    },
                  )}
                >
                  {e.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
