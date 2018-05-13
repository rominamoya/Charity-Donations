import { combineReducers } from 'redux';
import contactsReducer from '../charityReducer';

const allReducers = combineReducers({
  charityInfo: contactsReducer,
});

export default allReducers;
