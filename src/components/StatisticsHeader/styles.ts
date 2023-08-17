import { ButtonStyleProps } from '@components/CardButton/styles';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

type Props = {
  type: ButtonStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  padding: 32px 24px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  position: relative;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 24px;
`;

export const BackIcon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 32,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)``;
