import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { ButtonText, ButtonVariant, Container, Icon } from './styles';

type ButtonProps = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  text: string;
  variant?: ButtonVariant;
};

export function Button({
  text,
  icon,
  variant = 'CONTAINED',
  ...rest
}: ButtonProps) {
  return (
    <Container variant={variant} {...rest}>
      {icon && <Icon name={icon} variant={variant} />}
      <ButtonText variant={variant}>{text}</ButtonText>
    </Container>
  );
}
