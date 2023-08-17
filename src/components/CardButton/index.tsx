import { Highlight } from '@components/Highlight';
import { TouchableOpacityProps } from 'react-native';
import { ButtonStyleProps, Container, Icon } from './styles';

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
      <Highlight title={title} subtitle={subtitle} />
    </Container>
  );
}
