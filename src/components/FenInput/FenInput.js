import React from 'react';
import { connect } from 'react-redux';
import { updateFenValue } from '../../actions';
import './FenInput.css';

const FenInput = props => {
  const { fenValue, updateFenValue } = props;
  return (
    <input 
      placeholder="Enter a valid FEN string" 
      value={fenValue}
      onChange={ event => updateFenValue(event.target.value)}
    />
  )
};

const mapStateToProps = (state) => {
  return { fenValue: state.fen };
}
      
export default connect(mapStateToProps, { updateFenValue })(FenInput);