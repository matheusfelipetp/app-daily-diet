import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, Container, Icon } from './styles';

type ButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  text: string;
};

export function Button({ text, icon, ...rest }: ButtonProps) {
  return (
    <Container {...rest}>
      {icon && <Icon name={icon} />}
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
