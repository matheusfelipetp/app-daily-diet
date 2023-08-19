import logo from '@assets/logo.png';
import profile from '@assets/profile.png';
import { Button } from '@components/Button';
import { CardInfo } from '@components/CardButton';
import { CardFood } from '@components/CardFood';
import { ListEmpty } from '@components/ListEmpty';
import { ListTitle } from '@components/ListTitle';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SectionList, Alert } from 'react-native';
import {
  Container,
  ContainerButton,
  ContainerButtonText,
  HeaderHome,
  Logo,
  ProfileImage,
} from './styles';
import { foodGetAll } from '@storage/foods/foodGetAll';
import { Loading } from '@components/Loading';
import { formattedAndSortFoodList } from '@utils/formattedAndSortFoodList';
import { foodGetTotalStatistics } from '@storage/foods/foodGetTotalStatistcs';

export type PropsFood = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
};

export type ListProps = {
  title: string;
  data: PropsFood[];
};

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState<ListProps[]>([]);
  const [percentInDiet, setPercentInDiet] = useState('');

  const navigation = useNavigation();

  const handleStatistics = () => {
    navigation.navigate('statistics');
  };

  const handleNewFood = () => {
    navigation.navigate('newFood');
  };

  const handleFood = (id: string) => {
    navigation.navigate('food', { id });
  };

  const fetchFoods = async () => {
    try {
      setIsLoading(true);

      const data = await foodGetAll();

      const percent = foodGetTotalStatistics(data);
      setPercentInDiet(percent);

      const formattedData = formattedAndSortFoodList(data);
      setFoods(formattedData);
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.');
    } finally {
      setIsLoading(false);
    }
  };

  const verifyTotalPercentInDiet = () => {
    const total = Number(percentInDiet);

    if (total >= 50) {
      return 'PRIMARY';
    } else {
      return 'SECONDARY';
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFoods();
    }, []),
  );

  return (
    <Container>
      <HeaderHome>
        <Logo source={logo} alt="Logo Daily Diet" />
        <ProfileImage source={profile} alt="Foto de perfil do usuário" />
      </HeaderHome>

      <CardInfo
        title={`${percentInDiet}%`}
        subtitle="das refeições dentro da dieta"
        onPress={handleStatistics}
        type={verifyTotalPercentInDiet()}
      />

      <ContainerButton>
        <ContainerButtonText>Refeições</ContainerButtonText>
        <Button icon="add" text="Nova refeição" onPress={handleNewFood} />
      </ContainerButton>

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={foods}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardFood
              key={item.id}
              food={item}
              onPress={() => handleFood(item.id)}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <ListTitle title={title} />
          )}
          ListEmptyComponent={() => (
            <ListEmpty text="Que tal adicionar sua primeira refeição?" />
          )}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled
        />
      )}
    </Container>
  );
}
