import logo from '@assets/logo.png';
import profile from '@assets/profile.png';
import { Button } from '@components/Button';
import { CardInfo } from '@components/CardButton';
import { CardFood } from '@components/CardFood';
import { ListEmpty } from '@components/ListEmpty';
import { ListTitle } from '@components/ListTitle';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SectionList } from 'react-native';
import {
  Container,
  ContainerButton,
  ContainerButtonText,
  HeaderHome,
  Logo,
  ProfileImage,
} from './styles';

export type PropsFood = {
  id: string;
  name: string;
  description: string;
  date: string;
  hour: string;
  isDiet: boolean;
};

type ListProps = {
  title: string;
  data: PropsFood[];
};

const example = {
  title: '16.08.2023',
  data: [
    {
      id: '123',
      name: 'food',
      description: 'food description',
      date: '20/04/2023',
      hour: '12:00',
      isDiet: true,
    },
  ],
};

export function Home() {
  const [foods, setFoods] = useState<ListProps[]>([example]);

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

  return (
    <Container>
      <HeaderHome>
        <Logo source={logo} alt="Logo Daily Diet" />
        <ProfileImage source={profile} alt="Foto de perfil do usuário" />
      </HeaderHome>

      <CardInfo
        title="90,86%"
        subtitle="das refeições dentro da dieta"
        onPress={handleStatistics}
      />

      <ContainerButton>
        <ContainerButtonText>Refeições</ContainerButtonText>
        <Button icon="add" text="Nova refeição" onPress={handleNewFood} />
      </ContainerButton>

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
      />
    </Container>
  );
}
