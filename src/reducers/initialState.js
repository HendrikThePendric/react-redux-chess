import { INITIAL_FEN } from '../constants';
import fenParser from '../fenParser';

export default function () {
    return {
      fenValue      : INITIAL_FEN,
      board         : fenParser.toBoard(INITIAL_FEN),
      selectedSquare: null
    }
}