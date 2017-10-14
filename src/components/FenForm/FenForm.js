import React from 'react';
import { connect } from 'react-redux';
import { updateFenValue } from '../../actions';
import './FenForm.css';

const FenForm = props => {
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
  console.log(state);
  return { fenValue: state.fen };
}
      
export default connect(mapStateToProps, { updateFenValue })(FenForm);