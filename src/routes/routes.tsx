import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../layouts/ProtectedRoute';
import Login from '../pages/Login';
import { protectedPaths } from './protectedPaths';
import { routesName } from './routesName';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: protectedPaths,
  },
  {
    path: routesName.LOGIN,
    element: <Login />,
  },
]);

export default router;
