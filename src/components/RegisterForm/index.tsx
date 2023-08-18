import { Button } from '@components/Button';
import { DatePicker } from '@components/DatePicker';
import { Input } from '@components/Input';
import { StatusButton } from '@components/StatusButton';
import { useState } from 'react';
import {
  Container,
  ContainerForm,
  ContainerPicker,
  LabelStatus,
} from './styles';

export function RegisterForm() {
  const [isPrimarySelected, setIsPrimarySelected] = useState(false);
  const [isSecondarySelected, setIsSecondarySelected] = useState(false);

  const handlePrimaryButton = () => {
    setIsPrimarySelected(!isPrimarySelected);
    setIsSecondarySelected(false);
  };

  const handleSecondaryButton = () => {
    setIsSecondarySelected(!isSecondarySelected);
    setIsPrimarySelected(false);
  };

  return (
    <Container>
      <ContainerForm>
        <Input label="Nome" placeholder="Digite o nome da refeição" />

        <Input
          label="Descrição"
          placeholder="Descreva a refeição"
          size="LARGE"
          multiline
          numberOfLines={4}
        />

        <ContainerPicker>
          <DatePicker label="Data" placeholder="Data da refeição" />
          <DatePicker
            label="Hora"
            modePicker="time"
            placeholder="Hora da refeição"
          />
        </ContainerPicker>

        <LabelStatus>Está dentro da dieta?</LabelStatus>
        <ContainerPicker>
          <StatusButton
            onPress={handlePrimaryButton}
            isSelected={isPrimarySelected}
          />
          <StatusButton
            type="SECONDARY"
            onPress={handleSecondaryButton}
            isSelected={isSecondarySelected}
          />
        </ContainerPicker>
      </ContainerForm>

      <Button text="Cadastrar refeição" />
    </Container>
  );
}
