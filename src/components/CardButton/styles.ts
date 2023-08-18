import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

export type ButtonStyleProps = 'PRIMARY' | 'SECONDARY';

type ButtonProps = {
  type: ButtonStyleProps;
};

export const Container = styled.TouchableOpacity<ButtonProps>`
  margin-top: 32px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
`;

export const Icon = styled(MaterialIcons).attrs<ButtonProps>(
  ({ theme, type }) => ({
    size: 20,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  }),
)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
 