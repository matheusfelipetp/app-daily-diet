import { StatisticsContent } from '@components/StatisticsContent';
import { StatisticsHeader } from '@components/StatisticsHeader';
import { Container } from './styles';

export function Statistics() {
  return (
    <Container>
      <StatisticsHeader
        title="90,86%"
        subtitle="das refeições dentro da dieta"
      />

      <StatisticsContent />
    </Container>
  );
}
