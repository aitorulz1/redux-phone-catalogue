import { combineReducers } from 'redux';
import phonesReducer from './phonesReducer';

export default combineReducers({
    phones: phonesReducer
})