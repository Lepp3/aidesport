import { createBrowserRouter } from 'react-router';
import { HomePage } from '../components/pages/HomePage/HomePage';
import { routes } from './routes';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HomePage />,
  },
]);
