'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ label, href }: { label: string; href: string }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        'text-[#ddd6cb] font-semibold py-2 px-4 rounded-lg hover:bg-gradient-to-t hover:from-[#ff8a05] hover:to-[#f9b331] nav-text-shadow hover:text-transparent hover:bg-clip-text font-montserrat',
        {
          'bg-gradient-to-t from-[#ff8a05] to-[#f9b331] nav-text-shadow-active text-transparent bg-clip-text':
            path === href,
        },
      )}
    >
      {label}
    </Link>
  );
};

export default NavLink;
