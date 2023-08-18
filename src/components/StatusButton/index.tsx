import { ButtonStyleProps } from '@components/CardButton/styles';
import { TouchableOpacityProps } from 'react-native';
import { Container, Status, TextStyled } from './styles';

type IStatusButton = TouchableOpacityProps & {
  type?: ButtonStyleProps;
  isSelected?: boolean;
};

export function StatusButton({
  type = 'PRIMARY',
  isSelected = false,
  ...rest
}: IStatusButton) {
  return (
    <Container type={type} isSelected={isSelected} {...rest}>
      <Status type={type} />
      <TextStyled>{type === 'PRIMARY' ? 'Sim' : 'Não'}</TextStyled>
    </Container>
  );
}
