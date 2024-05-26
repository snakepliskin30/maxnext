'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';
import { cn } from '@/lib/utils';

const images = [
  { image: burgerImg, alt: 'A delicious, juicy burger' },
  { image: curryImg, alt: 'A delicious, spicy curry' },
  { image: dumplingsImg, alt: 'Steamed dumplings' },
  { image: macncheeseImg, alt: 'Mac and cheese' },
  { image: pizzaImg, alt: 'A delicious pizza' },
  { image: schnitzelImg, alt: 'A delicious schnitzel' },
  { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];

const ImageSlideShow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    // <div className={classes.slideshow}>
    <div className='relative w-full h-full rounded-lg overflow-hidden shadow-2xl'>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          // className={index === currentImageIndex ? classes.active : ''}
          className={cn(
            'w-full h-full object-cover absolute top-0 left-0 opacity-0 scale-[1.1] translate-x-(-1rem) rotate-[-5deg] transition duration-500 ease-in-out',
            {
              'z-[1] opacity-100 scale-[1] translate-x-0 rotate-0':
                index === currentImageIndex,
            },
          )}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default ImageSlideShow;
