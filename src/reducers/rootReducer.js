import { combineReducers } from 'redux';
import fenValue from './fenValue';
import board from './board';
import selectedSquare from './selectedSquare';

const rootReducer = combineReducers({
  fenValue,
  board,
  selectedSquare
})

export default rootReducer;