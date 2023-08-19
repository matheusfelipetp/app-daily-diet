import { PropsFood } from '@screens/Home';

export function foodGetTotalStatistics(foods: PropsFood[]) {
  try {
    if (foods.length) {
      const total = foods.length;
      const totalInDiet = foods.filter((food) => food.isDiet).length;
      const resultInPercent = (totalInDiet / total) * 100;

      return resultInPercent.toFixed(2);
    }

    return '0';
  } catch (error) {
    throw error;
  }
}
