import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';
import { ToastContainer } from 'react-toastify';

export function App() {
  return (
    <BrowserRouter>
      <Router />
      <ToastContainer />
    </BrowserRouter>
  );
}
