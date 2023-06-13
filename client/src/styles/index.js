import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerLogin = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px solid white;
  border-radius: 25px;
  flex-direction: column;
  background-color: rgb(123, 54, 244);
  padding: 10px;
`;

export const Login = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

export const InputArea = styled.input`
  width: 70%;
  display: flex;
  border-radius: 15px;
  padding: 5px 10px;
`;

export const Button = styled.button`
  width: 40%;
  border-radius: 15px;
  padding: 2px 0;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 30%;
  background-color: white;
  border-radius: 15px;
  text-align: center;
  padding: 2px 0;
`;
