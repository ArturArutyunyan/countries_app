import { createAction } from 'redux-actions';

import {
  AUTH_USER_REQUESTED,
  AUTH_USER_RECEIVED,
  AUTH_USER_REJECTED,
  LOGOUT_REQUESTED,
  LOGOUT_RECEIVED,
} from '../common';

export const loginAction = createAction(AUTH_USER_REQUESTED);
export const loginSuccessAction = createAction(AUTH_USER_RECEIVED);
export const loginFailAction = createAction(AUTH_USER_REJECTED);

export const logoutAction = createAction(LOGOUT_REQUESTED);
export const logoutSuccessAction = createAction(LOGOUT_RECEIVED);
