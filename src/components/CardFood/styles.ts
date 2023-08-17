import { ButtonStyleProps } from '@components/CardButton/styles';
import styled, { css } from 'styled-components/native';

type StyleProps = {
  type: ButtonStyleProps;
};

export const Container = styled.TouchableOpacity`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  height: 50px;
  margin-top: 10px;
  border-radius: 6px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`;

export const ContainerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Divider = styled.View`
  width: 2px;
  height: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
  margin: 0 16px;
`;

export const FoodName = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Status = styled.View<StyleProps>`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
