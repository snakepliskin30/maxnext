import Link from 'next/link';

export default function Home() {
  console.log('homepage');
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Please click the links below to navigate to other routes
      </h1>

      <ul className='flex flex-col gap-2 items-center mt-5'>
        <li>
          <Link href='/meals'>Go to Meals Page</Link>
        </li>
        <li>
          <Link href='/meals/share'>Go to Meals Sharing Page</Link>
        </li>
        <li>
          <Link href='/community'>Go to Community Page</Link>
        </li>
        <li>
          <Link href='/meals/burger'>Go to Burger Meal Page</Link>
        </li>
        <li>
          <Link href='/meals/spaghetti'>Go to Spaghetti Page</Link>
        </li>
      </ul>
    </main>
  );
}
