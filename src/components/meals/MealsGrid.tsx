import MealItem from './MealItem';
import { type MealsGridProps } from '@/lib/types';

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className='w-[90%] max-w-[90rem] grid-cols-meal-grid-auto-fill gap-20 my-8 mx-auto p-0'>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
