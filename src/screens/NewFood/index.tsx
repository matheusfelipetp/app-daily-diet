import { FinishedRegisterFood } from '@components/FinishedRegisterFood';
import { Header } from '@components/Header';
import { RegisterForm } from '@components/RegisterForm';
import { useState } from 'react';
import { Container } from './styles';

export function NewFood() {
  const [isFinished, setIsFinished] = useState(false);
  const [isInDiet, setIsInDiet] = useState(true);

  const handleIsFinished = () => {
    setIsFinished(!isFinished);
  };

  return (
    <Container>
      <Header title="Nova refeição" />

      {isFinished ? (
        <FinishedRegisterFood isInDiet={isInDiet} />
      ) : (
        <RegisterForm
          handleIsFinished={handleIsFinished}
          isInDiet={isInDiet}
          setIsInDiet={setIsInDiet}
        />
      )}
    </Container>
  );
}
