import { ButtonStyleProps } from '@components/CardButton/styles';
import styled, { css } from 'styled-components/native';

type StatusProps = {
  type: ButtonStyleProps;
};

interface ButtonProps extends StatusProps {
  isSelected?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ theme, type, isSelected }) => {
    if (isSelected) {
      return type === 'PRIMARY'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT;
    }
    return theme.COLORS.GRAY_200;
  }};

  border: ${({ theme, type, isSelected }) => {
    if (isSelected) {
      return type === 'PRIMARY'
        ? `1px solid ${theme.COLORS.GREEN_DARK}`
        : `1px solid ${theme.COLORS.RED_DARK}`;
    }
    return `1px solid ${theme.COLORS.GRAY_200}`;
  }};

  height: 50px;
  width: 47%;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: row;
`;

export const Status = styled.View<StatusProps>`
  height: 10px;
  width: 10px;
  background-color: ${({ theme, type }) =>
    type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  border-radius: 9999px;
`;

export const TextStyled = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;
