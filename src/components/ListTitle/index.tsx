import { Title } from './styles';

type ListTitleProps = {
  title: string;
};

export function ListTitle({ title }: ListTitleProps) {
  return <Title>{title}</Title>;
}
