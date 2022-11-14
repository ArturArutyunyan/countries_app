import {
  AUTH_USER_RECEIVED,
  AUTH_USER_REJECTED,
  AUTH_USER_REQUESTED,
  LOGOUT_RECEIVED,
} from '../common';

const initialState = {
  isAuth: Boolean(localStorage.getItem('token')),
  error: '',
  isLoading: false,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case AUTH_USER_RECEIVED:
      return {
        ...state,
        isAuth: true,
        isLoading: false,
      };

    case AUTH_USER_REJECTED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case LOGOUT_RECEIVED:
      return {
        ...state,
        isAuth: false,
      };

    default: return state;
  }
}
