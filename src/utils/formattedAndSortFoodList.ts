import { ListProps, PropsFood } from '@screens/Home';

export function formattedAndSortFoodList(data: PropsFood[]) {
  const dataByTitle: Record<string, PropsFood[]> = {};

  data.forEach((food) => {
    if (!dataByTitle[food.date]) {
      dataByTitle[food.date] = [];
    }
    dataByTitle[food.date].push(food);
  });

  const formattedData: ListProps[] = Object.entries(dataByTitle)
    .map(([title, data]) => ({
      title,
      data: data.sort((a, b) => b.hour.localeCompare(a.hour)),
    }))
    .sort((a, b) => b.title.localeCompare(a.title));

  return formattedData;
}
