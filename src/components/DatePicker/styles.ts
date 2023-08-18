import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  gap: 4px;
  width: 47%;
`;

export const TextLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const InputStyled = styled.TextInput`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const DatePickerStyled = styled.TouchableOpacity`
  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    height: 50px;
  `}

  border-radius: 6px;
  padding-left: 16px;
  justify-content: center;
`;
