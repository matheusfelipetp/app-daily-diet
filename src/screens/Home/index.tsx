import logo from '@assets/logo.png';
import profile from '@assets/profile.png';
import { Button } from '@components/Button';
import { CardInfo } from '@components/CardButton';
import {
  Container,
  ContainerButton,
  ContainerButtonText,
  HeaderHome,
  Logo,
  ProfileImage,
} from './styles';

export function Home() {
  return (
    <Container>
      <HeaderHome>
        <Logo source={logo} alt="Logo Daily Diet" />
        <ProfileImage source={profile} alt="Foto de perfil do usuário" />
      </HeaderHome>

      <CardInfo title="90,86%" subtitle="das refeições dentro da dieta" />

      <ContainerButton>
        <ContainerButtonText>Refeições</ContainerButtonText>
        <Button icon="add" text="Nova refeição" />
      </ContainerButton>
    </Container>
  );
}
