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
  name: string;
  description: string;
  date: Date;
  hour: string;
  isDiet: boolean;
};

type ListProps = {
  title: string;
  data: PropsFood[];
};

export function Home() {
  const [foods, setFoods] = useState<ListProps[]>([]);

  const navigation = useNavigation();

  const handleStatistics = () => {
    navigation.navigate('statistics');
  };

  const handleNewFood = () => {
    navigation.navigate('newFood');
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
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <CardFood food={item} />}
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
