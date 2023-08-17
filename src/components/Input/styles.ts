import styled, { css } from 'styled-components/native';

export type InputSize = 'NORMAL' | 'LARGE';

type InputProps = {
  size: InputSize;
};

export const Container = styled.View`
  gap: 4px;
`;

export const TextLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const InputStyled = styled.TextInput<InputProps>`
  ${({ theme, size }) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    height: ${size === 'NORMAL' ? '50px' : '100px'};
    padding-bottom: ${size === 'NORMAL' ? 0 : '50px'};
  `}

  border-radius: 6px;
  padding-left: 16px;
`;
