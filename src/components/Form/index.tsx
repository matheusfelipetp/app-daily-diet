import { Button } from '@components/Button';
import { DatePicker } from '@components/DatePicker';
import { Input } from '@components/Input';
import { StatusButton } from '@components/StatusButton';
import { formattedDate } from '@utils/formattedDate';
import { formattedHour } from '@utils/formattedHour';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  Container,
  ContainerForm,
  ContainerPicker,
  LabelStatus,
} from './styles';
import { PropsFood } from '@screens/Home';
import { foodCreate } from '@storage/foods/foodCreate';
import uuid from 'react-native-uuid';
import { Alert } from 'react-native';
import { foodUpdate } from '@storage/foods/foodUpdate';

type PropsForm = {
  handleSubmit: () => void;
  isInDiet: boolean;
  setIsInDiet: Dispatch<SetStateAction<boolean>>;
  isEdit?: boolean;
  food?: PropsFood;
};

export function Form({
  handleSubmit,
  isInDiet,
  setIsInDiet,
  isEdit,
  food,
}: PropsForm) {
  const [name, setName] = useState('');
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

  const handleSubmitForm = async () => {
    if (name && description && date && hour) {
      const foodData = {
        name,
        description,
        date: formattedDate(date),
        hour: formattedHour(hour),
        isDiet: isInDiet,
      };

      if (isEdit) {
        await foodUpdate(food?.id as string, foodData);
      } else {
        const newFood = { ...foodData, id: uuid.v4() as string };
        await foodCreate(newFood);
      }

      handleSubmit();
    } else {
      Alert.alert(
        'Campos obrigatórios',
        'É necessário preencher todos os campos',
      );
    }
  };

  useEffect(() => {
    if (isEdit && food) {
      setName(food.name);
      setDescription(food.description);

      const dateParts = food.date.split('/');
      const year = parseInt(dateParts[2], 10);
      const month = parseInt(dateParts[1], 10) - 1;
      const day = parseInt(dateParts[0], 10);
      const dateFormatted = new Date(year, month, day);

      setDate(dateFormatted);

      const [hours, minutes] = food.hour.split(':');
      dateFormatted.setHours(parseInt(hours, 10));
      dateFormatted.setMinutes(parseInt(minutes, 10));

      setHour(dateFormatted);

      if (food.isDiet) {
        setIsPrimarySelected(true);
        setIsSecondarySelected(false);
      } else {
        setIsPrimarySelected(false);
        setIsSecondarySelected(true);
      }
    }
  }, [isEdit, food]);

  return (
    <Container>
      <ContainerForm>
        <Input
          label="Nome"
          placeholder="Digite o nome da refeição"
          value={name}
          onChangeText={setName}
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

      <Button
        text={isEdit ? 'Salvar alterações' : 'Cadastrar refeição'}
        onPress={handleSubmitForm}
      />
    </Container>
  );
}
