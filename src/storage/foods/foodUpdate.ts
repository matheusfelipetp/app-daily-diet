import { PropsFood } from '@screens/Home';
import { foodGetAll } from './foodGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FOOD_COLLECTION } from '@storage/storageConfig';

export async function foodUpdate(id: string, newData: Partial<PropsFood>) {
  try {
    const storage = await foodGetAll();

    const updatedFoods = storage.map((food) => {
      if (food.id === id) {
        return { id, ...newData };
      }
      return food;
    });

    const foodsFormatted = JSON.stringify(updatedFoods);

    await AsyncStorage.setItem(FOOD_COLLECTION, foodsFormatted);
  } catch (error) {
    throw error;
  }
}
