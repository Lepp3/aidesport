import { createBrowserRouter } from 'react-router';
import { Layout } from '../components/layout/layout';
import { HomePage } from '../components/pages/HomePage/HomePage';
import { routes } from './routes';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: routes.home, element: <HomePage /> }],
  },
]);
