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
    toast.warn('You have been logged out');
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
        toast.success('Login successful');
        toast.success('Valid token, you have access to private route');
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        toast.error('If you do not have an account, register');
      });
  };

  const ProtectedRoute = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      toast.success('Your Token is valid');
    } else {
      toast.error('No private route access');
      toast.error('Register and login to access the private route');
      toast.error('You have been redirected to the registration screen.');
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
            Private Route
          </ButtonLink>
        </LoginArea>
      </ContainerLogin>
    </Container>
  );
}
