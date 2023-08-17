import { Container, Icon, TextEmpty } from './styles';

type ListEmptyProps = {
  text: string;
};

export function ListEmpty({ text }: ListEmptyProps) {
  return (
    <Container>
      <Icon name="no-food" />
      <TextEmpty>{text}</TextEmpty>
    </Container>
  );
}
