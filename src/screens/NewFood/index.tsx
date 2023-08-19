import { FinishedRegisterFood } from '@components/FinishedRegisterFood';
import { Header } from '@components/Header';
import { Form } from '@components/Form';
import { useState } from 'react';
import { Container } from './styles';
import { foodCreate } from '@storage/foods/foodCreate';

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
        <Form
          handleSubmit={handleIsFinished}
          isInDiet={isInDiet}
          setIsInDiet={setIsInDiet}
        />
      )}
    </Container>
  );
}
