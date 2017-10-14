import { combineReducers } from 'redux'
import fen from './fen'
import board from './board'

const rootReducer = combineReducers({
  fenValue: fen,
  board   : board
})

export default rootReducer;