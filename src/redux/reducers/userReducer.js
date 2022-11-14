import {
  AUTH_USER_RECEIVED,
  AUTH_USER_REJECTED,
  LOGOUT_RECEIVED,
} from '../common';

const initialState = {
  isAuth: Boolean(localStorage.getItem('token')),
  error: '',
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_USER_RECEIVED:
      return {
        ...state,
        isAuth: true,
      };

    case AUTH_USER_REJECTED:
      return {
        ...state,
        error: action.error,
      };

    case LOGOUT_RECEIVED:
      return {
        ...state,
        isAuth: false,
      };

    default: return state;
  }
}
