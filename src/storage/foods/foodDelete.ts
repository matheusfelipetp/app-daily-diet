import AsyncStorage from '@react-native-async-storage/async-storage';
import { FOOD_COLLECTION } from '@storage/storageConfig';
import { foodGetAll } from './foodGetAll';

export async function foodDelete(id: string) {
  try {
    const storage = await foodGetAll();
    const foodsFiltered = storage.filter((food) => food.id !== id);
    const foods = JSON.stringify(foodsFiltered);

    await AsyncStorage.setItem(FOOD_COLLECTION, foods);
  } catch (error) {
    throw error;
  }
}
