import { FEN_UPDATED } from '../constants';

const fen = (state = '', { type, payload }) => {
  switch (type) {
    case FEN_UPDATED:
      return payload;
    default:
      return state
  }
};

export default fen;