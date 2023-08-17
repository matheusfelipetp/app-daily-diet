import { CardStatistics } from '@components/CardStatistics';
import { ContainerCards } from '@components/CardStatistics/styles';
import { Container, Title } from './styles';

export function StatisticsContent() {
  return (
    <Container>
      <Title>Estatísticas Gerais</Title>

      <ContainerCards direction="column">
        <CardStatistics
          title="22"
          subtitle="melhor sequência dentro da dieta"
        />
        <CardStatistics title="109" subtitle="refeições registradas" />

        <ContainerCards direction="row">
          <CardStatistics
            title="99"
            subtitle="refeições dentro da dieta"
            size="MD"
            type="PRIMARY"
          />
          <CardStatistics
            title="10"
            subtitle="refeições fora da dieta"
            size="MD"
            type="SECONDARY"
          />
        </ContainerCards>
      </ContainerCards>
    </Container>
  );
}
