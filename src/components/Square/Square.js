import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSelectedSquare, updateBoard, updateFenFromBoard } from '../../actions';
import './Square.css';

class Square extends Component {

  handleSquareClick() {
    const { selectedSquare, setSelectedSquare, updateBoard, square, updateFenFromBoard } = this.props;
    const { chessPiece } = square;
    const shouldSelect   = !selectedSquare && chessPiece;
    const shouldDeselect =  selectedSquare && selectedSquare === square;
    const shouldToggle   =  selectedSquare && chessPiece && chessPiece.color === selectedSquare.chessPiece.color;
    const shouldMove     =  selectedSquare && (!chessPiece || chessPiece.color !== selectedSquare.chessPiece.color);
    
    if (shouldSelect || shouldToggle) {
      setSelectedSquare(square);
    }

    if (shouldDeselect) {
      setSelectedSquare(null);
    }

    if (shouldMove) {
      updateBoard({ source: selectedSquare, target: square });
      updateFenFromBoard();
    }
  }

  render() {
    const { square, selectedSquare } = this.props;
    const { chessPiece, color } = square;
    const active  = !!(selectedSquare && selectedSquare.row === square.row && selectedSquare.column === square.column);
    const content = chessPiece ? chessPiece.symbol : '\u00a0';
    let className = 'square ' + color;
    if (active) {
      className += ' active';
    }
  
    return (
      <div
        className={ className }
        onClick={ this.handleSquareClick.bind(this) }
      >
        {content}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { 
    selectedSquare: state.selectedSquare,
    targetSquare: state.targetSquare
  };
}
      
export default connect(
  mapStateToProps, 
  { 
    setSelectedSquare,
    updateBoard,
    updateFenFromBoard
  }
)(Square);