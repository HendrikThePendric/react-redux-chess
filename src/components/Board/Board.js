import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ROW_NUMBERS, COLUMN_LETTERS } from '../../constants'
import Square from '../Square/Square';
import './Board.css';

class Board extends Component  {
  renderSquares() {
    const { board } = this.props;
    return Object.keys(board).map(function(key, index) {
      const square = board[key];
      return (
        <Square
          key={ index }
          square={ square }
        />
      )
   });
  }

  renderRowLegend() {
    return ROW_NUMBERS.map((row, index) => {
      return (
        <div 
          className="row-legend-item"
          key={index}
        >
          {row}
        </div>
      );
    });
  }

  renderColumnLegend() {
    return COLUMN_LETTERS.map((column, index) => {
      return (
        <div 
          className="column-legend-item"
          key={index}
        >
          {column}
        </div>
      );
    });
  }

  render () {
    return (
      <div className="board-wrap">
        <div className="row-legend">
          {this.renderRowLegend()}
        </div>
        <div className="board">
          { this.renderSquares() }
        </div>
        <div className="column-legend">
          {this.renderColumnLegend()}
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { board: state.board };
}
      
export default connect(mapStateToProps)(Board);