import Link from 'next/link';
import logoImg from '@/assets/logo.png';
import Image from 'next/image';
import MainHeaderBackground from './MainHeaderBackground';
import NavLink from './NavLink';

const nav = [
  {
    href: '/meals',
    label: 'Browse Meals',
  },
  {
    href: '/community',
    label: 'Foodies Community',
  },
];

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className='flex justify-between items-center py-8 px-4 md:py-4 md:px-[10%]'>
        <Link
          href='/'
          className='flex items-center justify-center gap-8 text-[#ddd6cb] font-bold tracking-[.15rem] uppercase text-2xl font-montserrat'
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
                <NavLink {...e} />
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
