import { type Meal } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';

const MealItem = ({ meal }: { meal: Meal }) => {
  return (
    <article className='flex flex-col justify-between h-full rounded-[4px] shadow-[0_0_12px_rgba(0, 0, 0, 0.3)] overflow-hidden transition duration-[0.3s] ease-in-out text-primary-text-color bg-gradient-to-r from-[#2c1e19] to-[#25200f]'>
      <header>
        <div className='relative h-[15rem]'>
          <Image
            src={meal.image}
            alt={meal.title}
            fill
            className='object-cover'
          />
        </div>
        <div className='pt-2 pb-0 px-4'>
          <h2 className='m-0 text-lg font-montserrat'>{meal.title}</h2>
          <p className='text-xs text-[#cfa69b] italic'>by {meal.creator}</p>
        </div>
      </header>
      <div className='flex flex-col justify-between h-full'>
        <p className='p-4 pb-0'>{meal.summary}</p>
        <div className='p-4 text-right'>
          <Link
            href={`/meals/${meal.slug}`}
            className='inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] hover:shadow-[0_0_12px_rgba(242, 100, 18, 0.8)]'
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
