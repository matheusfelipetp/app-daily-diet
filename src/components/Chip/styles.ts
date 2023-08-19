import { ButtonStyleProps } from '@components/CardButton/styles';
import styled, { css } from 'styled-components/native';

type StatusProps = {
  type: ButtonStyleProps;
};

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  height: 40px;
  width: 160px;
  border-radius: 9999px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const Status = styled.View<StatusProps>`
  height: 10px;
  width: 10px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 9999px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `}
`;
