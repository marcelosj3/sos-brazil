import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext';

interface IPrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const { accessToken } = useAuth();
  const location = useLocation();

  if (!accessToken) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};
