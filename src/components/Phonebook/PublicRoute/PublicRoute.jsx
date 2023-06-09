import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { getAuth } from 'redux/auth/auth-selectors';
import Spiner from '../Spiner/Spiner';

const PublicRoute = () => {
  const { isLogin, token } = useSelector(getAuth);

  if (!isLogin && token) {
    return <Spiner />;
  }

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoute;
