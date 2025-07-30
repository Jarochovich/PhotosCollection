import { BrowserRouter } from 'react-router-dom';
import App from './App';

export const RouterProvider = () => {
  return (
    <BrowserRouter basename="/photoscollection">
      <App />
    </BrowserRouter>
  );
};