import { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  ContainerLogin,
  InputArea,
  Login,
} from '../styles/Home';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  //const [tokenStatus, setTokenStatus] = useState('');

  const { login, logout } = useAuth();

  const handleRegister = () => {
    axios
      .post('http://localhost:3001/register', { username, password })
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  const handleLogout = () => {
    logout();
  };

  const handleLogin = () => {
    axios
      .post('http://localhost:3001/login', { username, password })
      .then((res) => {
        const { token } = res.data;
        login(token);
        setMessage(res.data.message);
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  /*

  const handleVerify = () => {
    const token = localStorage.getItem('token');
    axios
      .get('http://localhost:3001/protected', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setTokenStatus(response.data.message);
      })
      .catch((error) => {
        console.error(error.response.data);
        setTokenStatus(error.response.data.message);
      });
  };

  */

  return (
    <Container>
      <ContainerLogin>
        <h1>AUTHENTICATION</h1>
        <Login>
          <InputArea
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputArea
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleRegister}>Registrar</Button>
          <Button onClick={handleLogin}>Login</Button>
          {/*<Button onClick={handleVerify}>Verify</Button>*/}
          <Link to='/logged'>
            <Button>ROTA PROTEGIDA</Button>
          </Link>
          <Button onClick={handleLogout}>Sair</Button>
        </Login>
        <p>{message}</p>
        {/*<p>{tokenStatus}</p>*/}
      </ContainerLogin>
    </Container>
  );
}
