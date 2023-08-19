import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
  padding-top: 24px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
    background-color: ${theme.COLORS.GRAY_100};
  `}
`;
