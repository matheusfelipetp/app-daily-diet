import { Header } from '@components/Header';
import { Container } from './styles';
import { Form } from '@components/Form';
import { useCallback, useState } from 'react';
import { PropsFood } from '@screens/Home';
import { foodGetById } from '@storage/foods/foodGetById';
import { Alert } from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { RouteParams } from '@screens/Food';

export function EditFood() {
  const [currentFood, setCurrentFood] = useState<PropsFood | null>(null);
  const [isInDiet, setIsInDiet] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const fetchFood = async () => {
    try {
      const data = await foodGetById(id);

      if (data) {
        setCurrentFood(data);
      }
    } catch (error) {
      Alert.alert('Refeição', 'Não foi possível carregar a refeição.');
    }
  };

  const handleEdit = () => {
    Alert.alert('Refeição', 'Refeição editada com sucesso.');
    navigation.goBack();
  };

  useFocusEffect(
    useCallback(() => {
      fetchFood();
    }, []),
  );

  return (
    <Container>
      <Header title="Editar refeição" />
      <Form
        isInDiet={isInDiet}
        setIsInDiet={setIsInDiet}
        handleSubmit={handleEdit}
        isEdit
        food={currentFood ? currentFood : undefined}
      />
    </Container>
  );
}
