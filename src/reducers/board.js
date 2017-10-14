import { FEN_UPDATED } from '../constants';
import fenParser from '../fenParser';

const board = (state = '', { type, payload }) => {
  switch (type) {
    case FEN_UPDATED:
      return fenParser.toBoard(payload);
    default:
      return state
  }
};

export default board;