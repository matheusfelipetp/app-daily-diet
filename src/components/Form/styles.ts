import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 20px;
  padding: 24px;
  flex: 1;
  justify-content: space-between;
`;

export const ContainerForm = styled.View`
  gap: 24px;
`;

export const ContainerPicker = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 16px;
`;

export const LabelStatus = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: -16px
`;
