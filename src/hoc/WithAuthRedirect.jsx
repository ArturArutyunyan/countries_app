import React from 'react';
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

function WithAuthRedirect(Component) {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  return isAuth ? <Component /> : <Navigate to="/login" />;
}

export default WithAuthRedirect;
