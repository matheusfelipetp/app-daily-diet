import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};

  margin-bottom: 20px;
`;
