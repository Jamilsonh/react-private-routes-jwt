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

export const LoggedArea = styled.div`
  width: 90%;
  display: flex;
  align-items: center;

  justify-content: space-around;
`;

export const LoggedAreaText = styled.div`
  width: 50%;
  display: flex;
  gap: 10px;
`;

export const ButtonLogoutArea = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonLogout = styled(Link)`
  text-decoration: none;
  color: black;
  width: 30%;
  background-color: white;
  font-size: 12px;
  border-radius: 15px;
  text-align: center;
  padding: 2px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginArea = styled.div`
  width: 85%;
  height: 320px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  border-radius: 25px;
  gap: 10px;
`;

export const InputArea = styled.input`
  width: 70%;
  display: flex;
  border-radius: 15px;
  padding: 5px 10px;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: black;
  width: 40%;
  background-color: white;
  border-radius: 15px;
  text-align: center;
  padding: 2px 0;
`;

export const LoggedContainer = styled.div`
  width: 80%;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;
