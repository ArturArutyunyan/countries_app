import React from 'react';
import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

function WithoutAuthRedirect(Component) {
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return isAuth ? <Navigate to="/" /> : <Component />;
}

export default WithoutAuthRedirect;
