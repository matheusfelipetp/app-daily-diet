import styled from 'styled-components/native';

export type StyleProps = 'PRIMARY' | 'SECONDARY' | 'NORMAL';
export type SizeProps = 'MD' | 'LG';

type ContainerProps = {
  type: StyleProps;
  size: SizeProps;
};

type ContainerCardProps = {
  direction: 'column' | 'row';
};

export const Container = styled.View<ContainerProps>`
  width: ${({ size }) => (size === 'LG' ? '100%' : '48%')};
  background-color: ${({ theme, type }) =>
    type === 'NORMAL'
      ? theme.COLORS.GRAY_200
      : type === 'PRIMARY'
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  border-radius: 6px;
  padding: 16px;
`;

export const ContainerCards = styled.View<ContainerCardProps>`
  width: 100%;
  gap: 16px;
  flex-direction: ${({ direction }) =>
    direction === 'row' ? 'row' : 'column'};
`;
