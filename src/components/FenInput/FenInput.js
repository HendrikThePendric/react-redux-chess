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
      className="fen-input"
      onChange={ event => updateFenValue(event.target.value.trim()) }
    />
  )
};

const mapStateToProps = (state) => { 
  return { fenValue: state.fenValue };
}
      
export default connect(mapStateToProps, { updateFenValue })(FenInput);