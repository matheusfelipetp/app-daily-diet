import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Text } from 'react-native';
import { ButtonContainer, Container, ContainerContent } from './styles';

export function Food() {
  return (
    <Container>
      <Header title="Refeição" />

      <ContainerContent>
        <Text>teste</Text>

        <ButtonContainer>
          <Button text="Editar refeição" icon="edit" />
          <Button text="Excluir refeição" variant="OUTLINED" icon="delete" />
        </ButtonContainer>
      </ContainerContent>
    </Container>
  );
}
