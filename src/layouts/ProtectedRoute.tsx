import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useCurrentToken } from '../redux/features/auth/authSlice';
import { useAppSelector } from '../redux/hooks';
import { verifyToken } from '../utils/verifyToken';

type TProtectedRoute = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  if (!token && !user) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;
