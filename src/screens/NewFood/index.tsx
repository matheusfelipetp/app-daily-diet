import { Header } from '@components/Header';
import { RegisterForm } from '@components/RegisterForm';
import { useState } from 'react';
import { Container } from './styles';

export function NewFood() {
  const [isFinished, setIsFinished] = useState(false);

  return (
    <Container>
      <Header title="Nova refeição" />

      {isFinished ? <></> : <RegisterForm />}
    </Container>
  );
}
