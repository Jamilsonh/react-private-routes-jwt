import { useAuth } from '../hooks/useAuth';
import { ButtonLink, Container, ContainerLogin } from '../styles';

export function Logged() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Container>
      <ContainerLogin>
        <h1>VOCÊ ESTÁ LOGADO !!</h1>
        <ButtonLink to='/' onClick={handleLogout}>
          Logout
        </ButtonLink>
      </ContainerLogin>
    </Container>
  );
}
