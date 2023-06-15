import { useState } from 'react';
import axios from 'axios';
import {
  ButtonLink,
  ButtonLogout,
  ButtonLogoutArea,
  Container,
  ContainerLogin,
  InputArea,
  LoggedArea,
  LoggedAreaText,
  LoginArea,
} from '../styles';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from 'react-icons/fa';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { login, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    clearFields();
    toast.warn('Você foi deslogado');
  };

  const clearFields = () => {
    setUsername('');
    setPassword('');
  };

  const handleLogin = () => {
    axios
      .post('http://localhost:3001/login', { username, password })
      .then((res) => {
        const { token } = res.data;
        login(token);
        toast.success('Login efetuado com sucesso');
        toast.success('Token válido, vocë tem acesso a rota privada');
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        toast.error('Senão tiver uma conta, faça o seu cadastro');
      });
  };

  const ProtectedRoute = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      toast.success('Token válido');
    } else {
      toast.error(
        '(Sem acesso) Você foi redirecionado para a tela de cadastro.'
      );
      toast.error('Se cadastre e faça o login para ter acesso a rota privada');
    }
  };

  return (
    <Container>
      <ContainerLogin>
        <LoggedArea>
          {isAuthenticated ? (
            <>
              <LoggedAreaText>
                <FaUser size={20} style={{ marginRight: '0px' }} />
                <div>{username}</div>
              </LoggedAreaText>
              <ButtonLogoutArea>
                <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
              </ButtonLogoutArea>
            </>
          ) : (
            <>
              <LoggedAreaText>
                <FaUser size={20} style={{ marginRight: '0px' }} /> {'Username'}
              </LoggedAreaText>
              <ButtonLogoutArea />
            </>
          )}
        </LoggedArea>

        <LoginArea>
          <h1>LOGIN</h1>
          <InputArea
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isAuthenticated}
          />
          <InputArea
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isAuthenticated}
          />
          <ButtonLink onClick={handleLogin}>Login</ButtonLink>
          <ButtonLink to='/register'>Register</ButtonLink>
          <ButtonLink to='/logged' onClick={ProtectedRoute}>
            Página Privada
          </ButtonLink>
        </LoginArea>
      </ContainerLogin>
    </Container>
  );
}
