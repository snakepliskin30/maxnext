import ImageSlideShow from '@/components/images/ImageSlideShow';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className='flex gap-12 my-12 mx-auto w-[90%] max-w-[75rem]'>
        <div className='w-[40rem] h-[25rem]'>
          <ImageSlideShow />
        </div>
        <div className='space-y-4'>
          <div className='text-[#ddd6cb] text-2xl space-y-2'>
            <h1 className='font-montserrat text-[2rem] font-bold tracking-[0.15rem] uppercase bg-gradient-to-t from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent text-balance'>
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className='text-2xl flex gap-4'>
            <Link
              href='/community'
              className='inline-block mt-4 py-2 px-4 rounded-lg bg-transparent font-normal text-[#ff9b05] pl-0 hover:text-[#f9b241]'
            >
              Join the Community
            </Link>
            <Link
              href='/meals'
              className='inline-block mt-4 py-2 px-4 rounded-lg bg-gradient-to-t from-[#f9572a] to-[#ff9b05] text-white font-bold hover:bg-gradient-to-t hover:from-[#fd4715] hover:to-[#f9b241] active:from-[#fd4715] active:to-[#f9b241] hover:shadow-xl'
            >
              Explore the Meals
            </Link>
          </div>
        </div>
      </header>
      <main className='flex flex-col gap-8 font-montserrat'>
        <section className='flex flex-col gap-6 text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center text-balance'>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className='flex flex-col gap-6 text-[#ddd6cb] text-2xl max-w-[50rem] w-[90%] my-8 mx-auto text-center text-balance'>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
