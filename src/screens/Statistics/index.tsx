import { StatisticsContent } from '@components/StatisticsContent';
import { StatisticsHeader } from '@components/StatisticsHeader';
import { Container } from './styles';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { foodGetAll } from '@storage/foods/foodGetAll';
import { foodGetTotalStatistics } from '@storage/foods/foodGetTotalStatistcs';
import { Alert } from 'react-native';
import { Loading } from '@components/Loading';

export function Statistics() {
  const [isLoading, setIsLoading] = useState(true);
  const [percentInDiet, setPercentInDiet] = useState('');
  const [totalFoods, setTotalFoods] = useState(0);
  const [totalInDiet, setTotalInDiet] = useState(0);

  const fetchFoods = async () => {
    try {
      setIsLoading(true);

      const data = await foodGetAll();
      setTotalFoods(data.length);

      const foodsInDiet = data.filter((food) => food.isDiet);
      setTotalInDiet(foodsInDiet.length);

      const percent = foodGetTotalStatistics(data);
      setPercentInDiet(percent);
    } catch (error) {
      Alert.alert('Estatísticas', 'Não foi possível carregar as estatísticas.');
    } finally {
      setIsLoading(false);
    }
  };

  const verifyTotalPercentInDiet = () => {
    const total = Number(percentInDiet);

    if (total >= 50) {
      return 'PRIMARY';
    } else {
      return 'SECONDARY';
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchFoods();
    }, []),
  );

  return (
    <Container>
      <StatisticsHeader
        title={`${percentInDiet}%`}
        subtitle="das refeições dentro da dieta"
        type={verifyTotalPercentInDiet()}
      />

      {isLoading ? (
        <Loading />
      ) : (
        <StatisticsContent total={totalFoods} totalInDiet={totalInDiet} />
      )}
    </Container>
  );
}
