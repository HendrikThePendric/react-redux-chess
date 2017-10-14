
import {
  FEN_UPDATED
} from '../constants';

const createAction = (type, payload) => {
  return {
      type,
      payload
  };
};

export const updateFenValue = (fen) => createAction(FEN_UPDATED, fen);