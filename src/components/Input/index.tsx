import { TextInputProps, TextInput } from 'react-native';
import { Container, InputSize, InputStyled, TextLabel } from './styles';
import { RefObject } from 'react';

type InputProps = TextInputProps & {
  label: string;
  size?: InputSize;
};

export function Input({ label, size = 'NORMAL', ...rest }: InputProps) {
  return (
    <Container>
      <TextLabel>{label}</TextLabel>
      <InputStyled size={size} {...rest} />
    </Container>
  );
}
