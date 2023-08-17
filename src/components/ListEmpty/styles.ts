import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 100px;
  gap: 16px;
  align-items: center;
`;

export const TextEmpty = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_500};
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 60,
  color: theme.COLORS.GRAY_500,
}))``;
