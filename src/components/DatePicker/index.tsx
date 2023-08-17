import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { Container, DatePickerStyled, TextLabel } from './styles';

type modeTypes = 'date' | 'time';

type DatePickerProps = {
  label: string;
  modePicker?: modeTypes;
};

export function DatePicker({ label, modePicker = 'date' }: DatePickerProps) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState<modeTypes>(modePicker);
  const [show, setShow] = useState(false);

  const handleChangeData = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    if (selectedDate) {
      setShow(false);
      setDate(selectedDate);
    }
  };

  const showMode = (currentMode: modeTypes) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const handleVerifyMode = () => {
    if (modePicker === 'date') {
      showDatepicker();
    } else {
      showTimepicker();
    }
  };

  return (
    <Container>
      <TextLabel>{label}</TextLabel>

      <DatePickerStyled onPress={handleVerifyMode}>
        <TextInput placeholder="Data da refeição" editable={false} />
      </DatePickerStyled>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={handleChangeData}
        />
      )}
    </Container>
  );
}
