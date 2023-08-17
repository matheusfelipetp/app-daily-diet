import { Button } from '@components/Button';
import { DatePicker } from '@components/DatePicker';
import { Input } from '@components/Input';
import { Container, ContainerPicker } from './styles';

export function RegisterForm() {
  return (
    <Container>
      <Input label="Nome" placeholder="Digite o nome da refeição" />

      <Input
        label="Descrição"
        placeholder="Descreva a refeição"
        size="LARGE"
        multiline
        numberOfLines={4}
      />

      <ContainerPicker>
        <DatePicker label="Data" />
        <DatePicker label="Hora" modePicker="time" />
      </ContainerPicker>

      <Button text="Cadastrar refeição" />
    </Container>
  );
}

