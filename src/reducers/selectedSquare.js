import { CHESSPIECE_SELECTED, CHESSPIECE_MOVED, FEN_INPUT_CHANGED } from '../constants';

const selectedSquare = (state = 'henkie', { type, payload }) => {
  switch (type) {
    case CHESSPIECE_SELECTED:
      return payload;
    case CHESSPIECE_MOVED:
    case FEN_INPUT_CHANGED:
      return null;
    default:
      return state
  }
};

export default selectedSquare;