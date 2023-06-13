import { useState } from 'react';
import axios from 'axios';
import {
  ButtonLink,
  Container,
  ContainerLogin,
  InputArea,
  Login,
} from '../styles';

export function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

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

  return (
    <Container>
      <ContainerLogin>
        <h1>REGISTER</h1>
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
          <ButtonLink onClick={handleRegister}>Registrar</ButtonLink>
          <ButtonLink to='/'>Voltar</ButtonLink>
        </Login>
        <p>{message}</p>
      </ContainerLogin>
    </Container>
  );
}
