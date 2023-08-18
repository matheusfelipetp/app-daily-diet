import ImgDiet from '@assets/IllustrationDiet.png';
import ImgNotDiet from '@assets/IllustrationNotDiet.png';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { Container, ImageStyled, Subtitle, Title } from './styles';

type PropsFinishedRegisterFood = {
  isInDiet: boolean;
};

export function FinishedRegisterFood({ isInDiet }: PropsFinishedRegisterFood) {
  const navigation = useNavigation();

  const handleHomePage = () => {
    navigation.navigate('home');
  };

  return (
    <Container>
      <Title type={isInDiet ? 'PRIMARY' : 'SECONDARY'}>
        {isInDiet ? 'Continue assim!' : 'Que pena!'}
      </Title>

      <Subtitle>
        {isInDiet
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'}
      </Subtitle>

      <ImageStyled source={isInDiet ? ImgDiet : ImgNotDiet} />

      <Button text="Ir para a página inicial" onPress={handleHomePage} />
    </Container>
  );
}
