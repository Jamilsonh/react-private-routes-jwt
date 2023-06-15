import { useState } from 'react';
import axios from 'axios';
import {
  ButtonLink,
  Container,
  ContainerLogin,
  InputArea,
  LoginArea,
} from '../styles';
import { toast } from 'react-toastify';

export function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    axios
      .post('http://localhost:3001/register', { username, password })
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  return (
    <Container>
      <ContainerLogin>
        <h1>REGISTER</h1>
        <LoginArea>
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
        </LoginArea>
      </ContainerLogin>
    </Container>
  );
}
