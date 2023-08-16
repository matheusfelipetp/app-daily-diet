import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

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

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  margin-bottom: 4px
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_500};
  `}
`;
