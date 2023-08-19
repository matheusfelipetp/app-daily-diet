import { MaterialIcons } from '@expo/vector-icons';
import styled, { css } from 'styled-components/native';

export type StyleProps = 'PRIMARY' | 'SECONDARY' | 'NORMAL';

type ContainerProps = {
  type: StyleProps;
};

export const Container = styled.View<ContainerProps>`
  padding: 40px 24px 32px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: ${({ theme, type }) =>
    type === 'NORMAL'
      ? theme.COLORS.GRAY_300
      : type === 'PRIMARY'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};

  margin-top: 32px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 70px;
  left: 24px;
`;

export const BackIcon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.GRAY_700,
}))``;
