import { Button } from '@components/Button';
import { Header } from '@components/Header';
import {
  ButtonContainer,
  Container,
  ContainerContent,
  ContainerInfo,
  DateText,
  TextStyled,
  Title,
} from './styles';
import { Chip } from '@components/Chip';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { ModalAction } from '@components/ModalAction';
import { Alert } from 'react-native';
import { foodGetById } from '@storage/foods/foodGetById';
import { PropsFood } from '@screens/Home';
import { foodDelete } from '@storage/foods/foodDelete';

export type RouteParams = {
  id: string;
};

export function Food() {
  const [openModal, setOpenModal] = useState(false);
  const [currentFood, setCurrentFood] = useState<PropsFood | null>(null);

  const navigation = useNavigation();
  const route = useRoute();

  const { id } = route.params as RouteParams;

  const handleEditFood = () => {
    navigation.navigate('editFood', { id });
  };

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

  const handleSubmit = async () => {
    try {
      await foodDelete(id);
      navigation.navigate('home');
    } catch (error) {
      Alert.alert('Refeição', 'Não foi possível excluir a refeição.');
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFood();
    }, []),
  );

  return (
    <Container>
      <Header
        title="Refeição"
        type={currentFood?.isDiet ? 'PRIMARY' : 'SECONDARY'}
      />

      <ContainerContent>
        <ContainerInfo>
          <Title>{currentFood?.name}</Title>

          <TextStyled>{currentFood?.description}</TextStyled>

          <DateText>Data e hora</DateText>

          <TextStyled>
            {currentFood?.date} às {currentFood?.hour}
          </TextStyled>

          <Chip type={currentFood?.isDiet ? 'PRIMARY' : 'SECONDARY'} />
        </ContainerInfo>

        <ButtonContainer>
          <Button text="Editar refeição" icon="edit" onPress={handleEditFood} />

          <Button
            text="Excluir refeição"
            variant="OUTLINED"
            icon="delete"
            onPress={() => setOpenModal(true)}
          />
        </ButtonContainer>
      </ContainerContent>

      <ModalAction
        visible={openModal}
        onCancel={() => setOpenModal(false)}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}
