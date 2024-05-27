import { getMeal } from '@/lib/meals';
import { Meal } from '@/lib/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const MealInfoPage = async ({ params }: { params: { slug: string } }) => {
  const mealDetail = (await getMeal(params.slug)) as Meal;
  if (!mealDetail) {
    notFound();
  }
  mealDetail.instructions = mealDetail.instructions.replace(/\n/g, '<br />');

  return (
    <>
      <header className='flex py-8 px-4 gap-12 mx-auto max-w-[80rem]'>
        <div className='relative h-[20rem] w-[30rem]'>
          <Image
            src={mealDetail.image}
            fill
            className='object-cover rounded-[8px] shadow-[0_0_0.5rem_rgba(0, 0, 0, 0.5)] animate-fade-slide-in-from-left'
            alt='meal-image'
          />
        </div>

        <div className='pt-2 pb-0 mx-4 text-primary-text-color max-w-[40rem] animate-fade-slide-in-from-right'>
          <h1 className='m-0 text-[3.5rem] uppercase font-montserrat header-h1-text-shadow'>
            {mealDetail.title}
          </h1>
          <p className='text-2xl text-[#cfa69b] italic'>
            by{' '}
            <a
              href={`mailto:${mealDetail.creator_email}`}
              className='bg-gradient-to-r from-[#f9572a] to-[#ff8a05] text-transparent bg-clip-text nav-text-shadow'
            >
              {mealDetail.creator}
            </a>
          </p>
          <p className='text-2xl'>{mealDetail.summary}</p>
        </div>
      </header>
      <main>
        <p
          className='text-[1.25rem] leading-6 bg-[#6e6464] text-[#13120f] rounded-[8px] shadow-[0_0_0.5rem_rgba(0, 0, 0, 0.5)] p-8 max-w-[60rem] my-8 mx-auto animate-fade-slide-in-from-bottom'
          dangerouslySetInnerHTML={{
            __html: mealDetail.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealInfoPage;
