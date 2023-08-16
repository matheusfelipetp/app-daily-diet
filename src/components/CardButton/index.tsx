import { TouchableOpacityProps } from 'react-native';
import { ButtonStyleProps, Container, Icon, Subtitle, Title } from './styles';

type CardInfoProps = TouchableOpacityProps & {
  type?: ButtonStyleProps;
  title: string;
  subtitle: string;
};

export function CardInfo({
  type = 'PRIMARY',
  title,
  subtitle,
  ...rest
}: CardInfoProps) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} name="open-in-new" />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
