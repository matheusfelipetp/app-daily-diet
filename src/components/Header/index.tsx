import { useNavigation } from '@react-navigation/native';
import { BackButton, BackIcon, Container, StyleProps, Title } from './styles';

type HeaderProps = {
  title: string;
  type?: StyleProps;
};

export function Header({ title, type = 'NORMAL' }: HeaderProps) {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container type={type}>
      <BackButton onPress={handleBack}>
        <BackIcon name="keyboard-backspace" />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
}
