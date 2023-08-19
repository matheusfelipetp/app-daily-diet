import { ButtonStyleProps } from '@components/CardButton/styles';
import { Container, Status, Title } from './styles';

type ChipProps = {
  type?: ButtonStyleProps;
};

export function Chip({ type = 'PRIMARY' }: ChipProps) {
  return (
    <Container>
      <Status type={type} />
      <Title>{type === 'PRIMARY' ? 'dentro da dieta' : 'fora da dieta'}</Title>
    </Container>
  );
}
