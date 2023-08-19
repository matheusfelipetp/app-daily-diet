import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  border-radius: 8px;
  width: 80%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `}

  text-align: center;
`;

export const ButtonContainer = styled.View`
  margin-top: 20px;
  gap: 10px;
`;
