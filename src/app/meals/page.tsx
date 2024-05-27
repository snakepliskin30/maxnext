import MealsGrid from '@/components/meals/MealsGrid';
import { getMeals } from '@/lib/meals';
import Link from 'next/link';
import { Suspense } from 'react';

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
  return (
    <>
      <header className='flex flex-col gap-4 my-20 mx-auto w-[90%] text-primary-text-color'>
        <h1 className='font-montserrat text-5xl font-bold tracking-tight'>
          Delicious meals, created{' '}
          <span className='bg-gradient-to-r from-[#f9572a] to-[#ff8a05] px-1 bg-clip-text text-transparent'>
            by you
          </span>
        </h1>
        <p className='mt-8 m-0'>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className='m-0'>
          <Link
            href='/meals/share'
            className='inline-block py-2 px-4 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff8a05] text-white font-bold'
          >
            Share your favorite Recipe
          </Link>
        </p>
      </header>
      <main className='main'>
        <Suspense
          fallback={
            <div className='animate-pulse text-center'>Fetching Meals...</div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
