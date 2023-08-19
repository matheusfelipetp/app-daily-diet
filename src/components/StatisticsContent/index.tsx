import { CardStatistics } from '@components/CardStatistics';
import { ContainerCards } from '@components/CardStatistics/styles';
import { Container, Title } from './styles';
import { useEffect, useState } from 'react';
import { foodGetSequence } from '@storage/foods/foodGetSequence';
import { Alert } from 'react-native';

type ContentProps = {
  total: number;
  totalInDiet: number;
};

export function StatisticsContent({ total, totalInDiet }: ContentProps) {
  const [sequence, setSequence] = useState('');

  const totalNotDiet = total - totalInDiet;

  const fetchSequence = async () => {
    try {
      const data = await foodGetSequence();
      setSequence(data);
    } catch (error) {
      Alert.alert(
        'Sequência',
        'Não foi possível carregar a sequência de refeições dentro da dieta.',
      );
    }
  };

  useEffect(() => {
    fetchSequence();
  }, []);

  return (
    <Container>
      <Title>Estatísticas Gerais</Title>

      <ContainerCards direction="column">
        <CardStatistics
          title={sequence}
          subtitle="melhor sequência dentro da dieta"
        />

        <CardStatistics
          title={total.toString()}
          subtitle="refeições registradas"
        />

        <ContainerCards direction="row">
          <CardStatistics
            title={totalInDiet.toString()}
            subtitle="refeições dentro da dieta"
            size="MD"
            type="PRIMARY"
          />
          <CardStatistics
            title={totalNotDiet.toString()}
            subtitle="refeições fora da dieta"
            size="MD"
            type="SECONDARY"
          />
        </ContainerCards>
      </ContainerCards>
    </Container>
  );
}
