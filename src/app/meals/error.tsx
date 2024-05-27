'use client';

const error = ({ error }: { error: Error }) => {
  return (
    <main className='text-center'>
      <h1 className='bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent text-6xl font-bold'>
        An error occured!
      </h1>
      <p className='text-primary-text-color'>
        Failed to fetch meals data, please try again later.
      </p>
    </main>
  );
};

export default error;
