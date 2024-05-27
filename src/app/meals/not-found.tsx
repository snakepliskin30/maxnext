'use client';

const error = ({ error }: { error: Error }) => {
  return (
    <main className='text-center'>
      <h1 className='bg-gradient-to-r from-[#f9572a] to-[#ffc905] bg-clip-text text-transparent text-6xl font-bold'>
        Meal Not found
      </h1>
      <p className='text-primary-text-color'>
        No existing meals with that name exist in our record
      </p>
    </main>
  );
};

export default error;
