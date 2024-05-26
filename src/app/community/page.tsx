import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';

const CommunityPage = () => {
  return (
    <>
      <header className='flex flex-col gap-4 my-20 mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-2xl text-center'>
        <h1 className='text-6xl font-bold tracking-tight font-montserrat'>
          One shared passion:{' '}
          <span className='bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent'>
            Food
          </span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className='w-[90%] max-w-[40rem] mx-auto my-0 text-center'>
        <h2 className='text-[2rem] mb-12 text-[#ddd6cb] font-montserrat'>
          Community Perks
        </h2>

        <ul className='my-12 p-0 font-montserrat'>
          <li className='flex flex-col items-center gap-8'>
            <Image
              src={mealIcon}
              alt='A delicious meal'
              className='size-32 object-contain'
            />
            <p className='text-2xl font-bold m-0 text-[#ddd6cb]'>
              Share & discover recipes
            </p>
          </li>
          <li className='flex flex-col items-center gap-8'>
            <Image
              src={communityIcon}
              alt='A crowd of people, cooking'
              className='size-32 object-contain'
            />
            <p className='text-2xl font-bold m-0 text-[#ddd6cb]'>
              Find new friends & like-minded people
            </p>
          </li>
          <li className='flex flex-col items-center gap-8'>
            <Image
              src={eventsIcon}
              alt='A crowd of people at a cooking event'
              className='size-32 object-contain'
            />
            <p className='text-2xl font-bold m-0 text-[#ddd6cb]'>
              Participate in exclusive events
            </p>
          </li>
        </ul>
      </main>
    </>
  );
};

export default CommunityPage;
