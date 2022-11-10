import {
  GET_ALL_COUNTRIES_RECEIVED,
  GET_ALL_COUNTRIES_REJECTED,
  TOGGLE_POPUP_STATUS,
} from '../constants';

const initialState = {
  countries: [],
  popupStatus: false,
  error: '',
};

export default function countryReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_COUNTRIES_RECEIVED:
      return {
        ...state,
        countries: action.payload
      };

    case GET_ALL_COUNTRIES_REJECTED:
      return {
        ...state,
        error: action.error
      };

    case TOGGLE_POPUP_STATUS:
      return {
        ...state,
        popupStatus: action.popupStatus
      };
    default: return state;
  }
}