import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const ContainerContent = styled.View`
  flex: 1;
  padding: 24px;
  justify-content: space-between;
`;

export const ButtonContainer = styled.View`
  gap: 10px;
`;
