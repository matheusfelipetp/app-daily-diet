import { PropsFood } from '@screens/Home';
import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  ContainerInfo,
  Divider,
  FoodName,
  Hour,
  Status,
} from './styles';

type CardFoodProps = TouchableOpacityProps & {
  food: PropsFood;
};

export function CardFood({ food, ...rest }: CardFoodProps) {
  return (
    <Container {...rest}>
      <ContainerInfo>
        <Hour>{food.hour}</Hour>
        <Divider />
        <FoodName>{food.name}</FoodName>
      </ContainerInfo>

      <Status type={food.isDiet ? 'PRIMARY' : 'SECONDARY'} />
    </Container>
  );
}
