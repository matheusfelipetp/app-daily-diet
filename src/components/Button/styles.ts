import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export type ButtonVariant = 'CONTAINED' | 'OUTLINED';

type VariantProps = {
  variant: ButtonVariant;
};

export const Container = styled.TouchableOpacity<VariantProps>`
  ${({ theme, variant }) => css`
    background-color: ${variant === 'CONTAINED'
      ? theme.COLORS.GRAY_600
      : 'transparent'};
    border: ${variant === 'CONTAINED'
      ? '1px solid transparent'
      : `1px solid ${theme.COLORS.GRAY_600}`};
  `}

  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  height: 50px;
`;

export const ButtonText = styled.Text<VariantProps>`
  ${({ theme, variant }) => css`
    color: ${variant === 'CONTAINED'
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(MaterialIcons).attrs<VariantProps>(
  ({ theme, variant }) => ({
    size: 24,
    color: variant === 'CONTAINED' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
  }),
)`
  margin-right: 10px;
`;
