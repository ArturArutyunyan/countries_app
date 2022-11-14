import { combineReducers } from 'redux';

import authReducer from './authReducer';
import countryReducer from './countryReducer';

const rootReducer = combineReducers({
  authReducer,
  countryReducer,
});

export default rootReducer;
