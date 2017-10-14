import { 
  COLUMN_LETTERS,
  CHESS_PIECES
} from '../constants'

const addBoardItem = (board, rowNr, colIndex, instr) => {
  const colLetter = COLUMN_LETTERS[colIndex];
  board[rowNr + colLetter] = {
    row       : rowNr,
    column    : colLetter,
    color     : (rowNr % 2 === (colIndex + 1) % 2) ? 'white' : 'black',
    chessPiece: instr ? CHESS_PIECES[instr] : null
  };
};

const toBoard = fenStr => {
  let rowNr  = 8;
  let board  = {};
  const rows = fenStr.split(' ')[0].split('/');
  rows.forEach(row => {
    let colIndex          = 0;
    const colInstructions = row.split('');
    colInstructions.forEach(instr => {
      if (isNaN(parseInt(instr, 10))) {
        addBoardItem(board, rowNr, colIndex, instr);
        colIndex++;
      } else {
        let emptyFieldsCnt = parseInt(instr, 10);
        while (emptyFieldsCnt > 0) {
          addBoardItem(board, rowNr, colIndex, null);
          emptyFieldsCnt--;
          colIndex++;
        }
      }
    });
    rowNr--;
  });
  console.log(board);
  return board;
};

export default toBoard;