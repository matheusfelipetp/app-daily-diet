import { Button } from '@components/Button';
import { ButtonContainer, Container, ModalContent, Title } from './styles';
import { Modal } from 'react-native';

type ModalProps = {
  visible: boolean;
  onCancel: () => void;
  onSubmit: () => void;
};

export function ModalAction({ visible, onCancel, onSubmit }: ModalProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <Container>
        <ModalContent>
          <Title>Deseja realmente excluir o registro da refeição?</Title>

          <ButtonContainer>
            <Button text="Cancelar" variant="OUTLINED" onPress={onCancel} />

            <Button text="Sim, excluir" onPress={onSubmit} />
          </ButtonContainer>
        </ModalContent>
      </Container>
    </Modal>
  );
}
