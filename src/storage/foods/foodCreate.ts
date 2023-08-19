import { PropsFood } from '@screens/Home';
import { foodGetAll } from './foodGetAll';
import { FOOD_COLLECTION, SEQUENCE_IN_DIET } from '@storage/storageConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function foodCreate(newFood: PropsFood) {
  try {
    const storedFoods = await foodGetAll();
    const storedSequence = await AsyncStorage.getItem(SEQUENCE_IN_DIET);

    const storage = JSON.stringify([...storedFoods, newFood]);

    if (newFood.isDiet) {
      const sequence = storedSequence ? parseInt(storedSequence) + 1 : 1;
      await AsyncStorage.setItem(SEQUENCE_IN_DIET, sequence.toString());
    } else {
      await AsyncStorage.setItem(SEQUENCE_IN_DIET, '0');
    }

    await AsyncStorage.setItem(FOOD_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
