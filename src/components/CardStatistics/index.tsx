import { Highlight } from '@components/Highlight';
import { Container, SizeProps, StyleProps } from './styles';

type CardStatisticsProps = {
  type?: StyleProps;
  title: string;
  subtitle: string;
  size?: SizeProps;
};

export function CardStatistics({
  title,
  subtitle,
  type = 'NORMAL',
  size = 'LG',
}: CardStatisticsProps) {
  return (
    <Container type={type} size={size}>
      <Highlight title={title} subtitle={subtitle} />
    </Container>
  );
}
