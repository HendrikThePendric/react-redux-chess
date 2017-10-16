// Actions
export const FEN_INPUT_CHANGED    = 'The FEN input changed';
export const CHESSPIECE_MOVED     = 'A chesspiece was moved';
export const CHESSPIECE_SELECTED  = 'A chesspiece was selected to move';
export const BOARD_LAYOUT_UPDATED = 'The board layout was updated';

// Chessboard related
export const COLUMN_LETTERS     = ['a','b','c','d','e','f','g','h'];
export const ROW_NUMBERS        = [8,7,6,5,4,3,2,1];
export const INITIAL_FEN        = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
export const INITIAL_FEN_SUFFIX = ' w KQkq - 0 1';
export const CHESS_PIECES       = {
  K: {
    description: 'White King',
    symbol: '\u2654',
    color: 'white',
    fenCharacter: 'K'
  },
  Q: {
    description: 'White Queen',
    symbol: '\u2655',
    color: 'white',
    fenCharacter: 'Q'
  },
  R: {
    description: 'White Rook',
    symbol: '\u2656',
    color: 'white',
    fenCharacter: 'R'
  },
  B: {
    description: 'White Bishop',
    symbol: '\u2657',
    color: 'white',
    fenCharacter: 'B'
  },
  N: {
    description: 'White Knight',
    symbol: '\u2658',
    color: 'white',
    fenCharacter: 'N'
  },
  P: {
    description: 'White Pawn',
    symbol: '\u2659',
    color: 'white',
    fenCharacter: 'P'
  },
  k: {
    description: 'Black King',
    symbol: '\u265a',
    color: 'black',
    fenCharacter: 'k'
  },
  q: {
    description: 'Black Queen',
    symbol: '\u265b',
    color: 'black',
    fenCharacter: 'q'
  },
  r: {
    description: 'Black Rook',
    symbol: '\u265c',
    color: 'black',
    fenCharacter: 'r'
  },
  b: {
    description: 'Black Bishop',
    symbol: '\u265d',
    color: 'black',
    fenCharacter: 'b'
  },
  n: {
    description: 'Black Knight',
    symbol: '\u265e',
    color: 'black',
    fenCharacter: 'n'
  },
  p: {
    description: 'Black Pawn',
    symbol: '\u265f',
    color: 'black',
    fenCharacter: 'p'
  }
};