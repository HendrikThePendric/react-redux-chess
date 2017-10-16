
import {
  FEN_INPUT_CHANGED,
  CHESSPIECE_SELECTED,
  CHESSPIECE_MOVED,
  BOARD_LAYOUT_UPDATED
} from '../constants';

const createAction = (type, payload) => {
  return {
      type,
      payload
  };
};

export const updateFenValue = (fen) => createAction(FEN_INPUT_CHANGED, fen);

export const setSelectedSquare = (square) => createAction(CHESSPIECE_SELECTED, square);

export const updateBoard = (move) => createAction(CHESSPIECE_MOVED, move);

export const updateFenFromBoard = () => (dispatch, getState) => {
    const { board } = getState();
    return dispatch(createAction(BOARD_LAYOUT_UPDATED, board));
}