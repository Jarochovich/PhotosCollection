import { BrowserRouter } from 'react-router-dom';
import App from './App';

export const MyProvider = () => {
  return (
    <BrowserRouter basename="/photoscollection">
      <App />
    </BrowserRouter>
  );
};