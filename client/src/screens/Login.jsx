import { useState } from 'react';
import axios from 'axios';
import {
  Button,
  Container,
  ContainerLogin,
  InputArea,
  Login,
  NavbarLink,
} from '../styles';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const { login, logout, isAuthenticated } = useAuth();

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
        toast.error(err.response.data.message);
        toast.error('ola');
      });
  };

  const ProtectedRoute = () => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      toast.success('Token válido, você tem acesso a rota privada');
    } else {
      toast.error(
        'Você não tem acesso a essa rota, faça seu cadastro e depois faça o login'
      );
    }
  };

  return (
    <Container>
      <ContainerLogin>
        <h1>LOGIN</h1>
        <div>
          {isAuthenticated ? (
            <h2>Bem-vindo, {username}!</h2>
          ) : (
            <h2>Você não está logado.</h2>
          )}
        </div>
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
          <NavbarLink to='/register' onClick={handleLogin}>
            Register
          </NavbarLink>
          <Button onClick={handleLogin}>Login</Button>

          <Link to='/logged'>
            <Button onClick={ProtectedRoute}>ROTA PROTEGIDA</Button>
          </Link>
          <Button onClick={handleLogout}>Sair</Button>
          <div></div>
        </Login>
        <p>{message}</p>
      </ContainerLogin>
    </Container>
  );
}
