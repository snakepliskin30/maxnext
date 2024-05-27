import sql from 'better-sqlite3';
import { Meal } from './types';

const db = sql('meals.db');

export const getMeals = async (): Promise<Meal[] | Error> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare('SELECT * FROM meals').all() as Meal[];
};
