import { Button } from '@components/Button';
import { DatePicker } from '@components/DatePicker';
import { Input } from '@components/Input';
import { StatusButton } from '@components/StatusButton';
import { formattedDate } from '@utils/formattedDate';
import { formattedHour } from '@utils/formattedHour';
import { Dispatch, SetStateAction, useState } from 'react';
import {
  Container,
  ContainerForm,
  ContainerPicker,
  LabelStatus,
} from './styles';

type PropsRegisterForm = {
  handleIsFinished: () => void;
  isInDiet: boolean;
  setIsInDiet: Dispatch<SetStateAction<boolean>>;
};

export function RegisterForm({
  handleIsFinished,
  isInDiet,
  setIsInDiet,
}: PropsRegisterForm) {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState(new Date());

  const [isPrimarySelected, setIsPrimarySelected] = useState(true);
  const [isSecondarySelected, setIsSecondarySelected] = useState(false);

  const handlePrimaryButton = () => {
    setIsPrimarySelected(!isPrimarySelected);
    setIsSecondarySelected(false);
    setIsInDiet(true);
  };

  const handleSecondaryButton = () => {
    setIsSecondarySelected(!isSecondarySelected);
    setIsPrimarySelected(false);
    setIsInDiet(false);
  };

  const handleSubmit = () => {
    console.log({
      foodName,
      description,
      date: formattedDate(date),
      hour: formattedHour(hour),
      isInDiet,
    });

    handleIsFinished();
  };

  return (
    <Container>
      <ContainerForm>
        <Input
          label="Nome"
          placeholder="Digite o nome da refeição"
          value={foodName}
          onChangeText={setFoodName}
        />

        <Input
          label="Descrição"
          placeholder="Descreva a refeição"
          size="LARGE"
          multiline
          numberOfLines={4}
          value={description}
          onChangeText={setDescription}
        />

        <ContainerPicker>
          <DatePicker
            label="Data"
            placeholder="Data da refeição"
            value={date}
            setValue={setDate}
          />
          <DatePicker
            label="Hora"
            modePicker="time"
            placeholder="Hora da refeição"
            value={hour}
            setValue={setHour}
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

      <Button text="Cadastrar refeição" onPress={handleSubmit} />
    </Container>
  );
}
