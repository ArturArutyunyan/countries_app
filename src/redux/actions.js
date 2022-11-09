import * as actionTypes from './constants';

export const login = (payload) => ({
  type: actionTypes.AUTH_USER_REQUESTED,
  user: payload,
});

export const logout = () => ({
  type: actionTypes.LOGOUT_REQUESTED,
});