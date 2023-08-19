import AsyncStorage from '@react-native-async-storage/async-storage';
import { PropsFood } from '@screens/Home';
import { FOOD_COLLECTION } from '@storage/storageConfig';

export async function foodGetById(id: string): Promise<PropsFood> {
  try {
    const storage = await AsyncStorage.getItem(FOOD_COLLECTION);
    const foundedFood = storage
      ? JSON.parse(storage).find((food: PropsFood) => food.id === id)
      : null;

    return foundedFood;
  } catch (error) {
    throw error;
  }
}
