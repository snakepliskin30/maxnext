const MealsSharePage = () => {
  return (
    <>
      <header className='flex flex-col gap-8 my-20 mx-auto w-[90%] max-w-[75rem] text-primary-text-color text-xl'>
        <h1 className='font-montserrat text-5xl font-bold'>
          Share your{' '}
          <span className='bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent'>
            favorite meal
          </span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className='w-[90%] max-w-[75rem] my-12 mx-auto text-white'>
        <form className='max-w-[50rem]'>
          <div className='flex gap-4'>
            <p className='w-full'>
              <label
                className='block mb-2 text-[1rem] font-montserrat uppercase text-[#b3aea5] font-bold'
                htmlFor='name'
              >
                Your name
              </label>
              <input
                className='block w-full py-2 px-4 rounded-[4px] border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-primary-text-color focus:outline-[#f99f2a]'
                type='text'
                id='name'
                name='name'
                required
              />
            </p>
            <p className='w-full'>
              <label
                className='block mb-2 text-[1rem] font-montserrat uppercase text-[#b3aea5] font-bold'
                htmlFor='email'
              >
                Your email
              </label>
              <input
                className='block w-full py-2 px-4 rounded-[4px] border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-primary-text-color focus:outline-[#f99f2a]'
                type='email'
                id='email'
                name='email'
                required
              />
            </p>
          </div>
          <p>
            <label
              className='block mb-2 text-[1rem] font-montserrat uppercase text-[#b3aea5] font-bold'
              htmlFor='title'
            >
              Title
            </label>
            <input
              className='block w-full py-2 px-4 rounded-[4px] border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-primary-text-color focus:outline-[#f99f2a] bg-[#1f252d]'
              type='text'
              id='title'
              name='title'
              required
            />
          </p>
          <p>
            <label
              className='block mb-2 text-[1rem] font-montserrat uppercase text-[#b3aea5] font-bold'
              htmlFor='summary'
            >
              Short Summary
            </label>
            <input
              className='block w-full py-2 px-4 rounded-[4px] border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-primary-text-color focus:outline-[#f99f2a] bg-[#1f252d]'
              type='text'
              id='summary'
              name='summary'
              required
            />
          </p>
          <p>
            <label
              className='block mb-2 text-[1rem] font-montserrat uppercase text-[#b3aea5] font-bold'
              htmlFor='instructions'
            >
              Instructions
            </label>
            <textarea
              className='block w-full py-2 px-4 rounded-[4px] border border-[#454952] bg-[#1c2027] text-xl font-montserrat text-primary-text-color focus:outline-[#f99f2a] bg-[#1f252d]'
              id='instructions'
              name='instructions'
              rows={10}
              required
            ></textarea>
          </p>
          IMAGE PICKER
          <p className='text-right'>
            <button
              type='submit'
              className='py-[0.75rem] px-8 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded-[2px] cursor-pointer font-montserrat text-xl shadow-[0_2px_5px_rgba(0, 0, 0, 0.3)] hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241] disabled:bg-[#ccc] disabled:text-[#979797] disabled:cursor-not-allowed disabled:hover:bg-[#ccc] disabled:hover:text-[#979797] disabled:hover:cursor-not-allowed disabled:focus:bg-[#ccc] disabled:focus:text-[#979797] disabled:focus:cursor-not-allowed'
            >
              Share Meal
            </button>
          </p>
        </form>
      </main>
    </>
  );
};

export default MealsSharePage;
