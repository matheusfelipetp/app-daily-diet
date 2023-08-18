import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { formattedDate } from '@utils/formattedDate';
import { formattedHour } from '@utils/formattedHour';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Container, DatePickerStyled, InputStyled, TextLabel } from './styles';

type modeTypes = 'date' | 'time';

type DatePickerProps = {
  label: string;
  placeholder: string;
  modePicker?: modeTypes;
  value: Date;
  setValue: Dispatch<SetStateAction<Date>>;
};

export function DatePicker({
  label,
  placeholder,
  modePicker = 'date',
  value,
  setValue,
}: DatePickerProps) {
  const [mode, setMode] = useState<modeTypes>(modePicker);
  const [show, setShow] = useState(false);
  const [valueFormatted, setValueFormatted] = useState('');

  const handleChangeData = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    if (selectedDate) {
      setShow(false);
      setValue(selectedDate);
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

  useEffect(() => {
    if (modePicker === 'date') {
      const formatted = formattedDate(value);
      setValueFormatted(formatted);
    } else {
      const formatted = formattedHour(value);
      setValueFormatted(formatted);
    }
  }, [value]);

  return (
    <Container>
      <TextLabel>{label}</TextLabel>

      <DatePickerStyled onPress={handleVerifyMode}>
        <InputStyled
          placeholder={placeholder}
          value={valueFormatted}
          editable={false}
        />
      </DatePickerStyled>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={mode}
          is24Hour={true}
          onChange={handleChangeData}
        />
      )}
    </Container>
  );
}
