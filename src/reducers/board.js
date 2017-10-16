import { FEN_INPUT_CHANGED, CHESSPIECE_MOVED } from '../constants';
import fenParser from '../fenParser';

const board = (state = {}, { type, payload }) => {
  switch (type) {
    case FEN_INPUT_CHANGED:
      return fenParser.toBoard(payload);
    case CHESSPIECE_MOVED:
      return getUpdateBoard(state, payload);
    default:
      return state
  }
};

function getUpdateBoard(board, move) {
  const { source, target } = move;
  const { chessPiece }     = source;
  const updatedTarget      = {
    ...target,
    chessPiece: chessPiece
  };
  const updatedSource      = {
    ...source,
    chessPiece: null
  };
  return {
    ...board,
    [source.row + source.column]: updatedSource,
    [target.row + target.column]: updatedTarget
  }
}

export default board;