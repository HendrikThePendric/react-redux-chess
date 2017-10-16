import { FEN_INPUT_CHANGED, BOARD_LAYOUT_UPDATED, INITIAL_FEN } from '../constants';
import fenParser from '../fenParser';

const fenValue = (state = INITIAL_FEN, { type, payload }) => {
  switch (type) {
    case FEN_INPUT_CHANGED:
      return payload;
    case BOARD_LAYOUT_UPDATED:
      return fenParser.toFen(payload);
    default:
      return state
  }
};

export default fenValue;