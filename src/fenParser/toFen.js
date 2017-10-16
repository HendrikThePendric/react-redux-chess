import {ROW_NUMBERS, COLUMN_LETTERS, INITIAL_FEN_SUFFIX} from '../constants'

const toFen = board => {
  let fenStr = '';
  
  ROW_NUMBERS.forEach((row, rowIndex) => {
    let emptySquareCount = 0;

    COLUMN_LETTERS.forEach((col, colIndex) => {
      const square = board[row+col];
      if (square.chessPiece) {
        if (emptySquareCount > 0) {
          fenStr += emptySquareCount;
          emptySquareCount = 0;
        }
        fenStr += square.chessPiece.fenCharacter
      } else {
        emptySquareCount++;
        if (colIndex === COLUMN_LETTERS.length - 1) {
          fenStr += emptySquareCount;
        }
      }
    });

    if (rowIndex !== ROW_NUMBERS.length - 1) {
      fenStr += '/';
    }
  });
  fenStr += INITIAL_FEN_SUFFIX;
  return fenStr;
};

export default toFen;