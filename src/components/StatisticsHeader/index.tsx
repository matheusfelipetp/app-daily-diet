import { ButtonStyleProps } from '@components/CardButton/styles';
import { Highlight } from '@components/Highlight';
import { useNavigation } from '@react-navigation/native';
import { BackButton, BackIcon, Container } from './styles';

type HeaderProps = {
  type?: ButtonStyleProps;
  title: string;
  subtitle: string;
};

export function StatisticsHeader({
  type = 'PRIMARY',
  title,
  subtitle,
}: HeaderProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate('home');
  };

  return (
    <Container type={type}>
      <BackButton onPress={handleGoBack}>
        <BackIcon name="keyboard-backspace" type={type} />
      </BackButton>

      <Highlight title={title} subtitle={subtitle} />
    </Container>
  );
}
