import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ProtectedRoute from '../layouts/ProtectedRoute';
import Login from '../pages/Login';
import { protectedPaths } from './protectedPaths';

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
    path: '/login',
    element: <Login />,
  },
]);

export default router;
