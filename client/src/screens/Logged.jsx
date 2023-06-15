import { toast } from 'react-toastify';
import { useAuth } from '../hooks/useAuth';
import {
  ButtonLink,
  Container,
  ContainerLogin,
  LoggedContainer,
} from '../styles';

export function Logged() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.warn('You have been logged out');
  };

  return (
    <Container>
      <ContainerLogin>
        <LoggedContainer>
          <h1>AWESOME !!!</h1>
          <h2>Welcome to Private Route!</h2>
          <h2>
            You can see this page because you are logged in and your token is
            valid!
          </h2>
          <ButtonLink to='/' onClick={handleLogout}>
            Logout
          </ButtonLink>
        </LoggedContainer>
      </ContainerLogin>
    </Container>
  );
}
