import AsyncStorage from '@react-native-async-storage/async-storage';
import { SEQUENCE_IN_DIET } from '@storage/storageConfig';

export async function foodGetSequence() {
  try {
    const storage = await AsyncStorage.getItem(SEQUENCE_IN_DIET);
    return storage ? storage : '0';
  } catch (error) {
    throw error;
  }
}
