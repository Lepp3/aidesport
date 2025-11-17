import { createBrowserRouter } from 'react-router';
import { App } from '../App';
import { Layout } from '../components/layout/Layout';
import { AboutUsPage } from '../components/pages/AboutUsPage/AboutUsPage';
import { BlogPage } from '../components/pages/BlogPage/BlogPage';
import { HomePage } from '../components/pages/HomePage/HomePage';
import { routes } from './routes';

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: routes.home, element: <HomePage /> },
          { path: routes.blog, element: <BlogPage /> },
          { path: routes.about, element: <AboutUsPage /> },
        ],
      },
    ],
  },
]);
