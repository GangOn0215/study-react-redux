import React from 'react';
import { connect } from 'react-redux';

import { incrementCounter } from '../redux/counter/actions';
import { decrementCounter } from '../redux/counter/actions';

export const IncCounter = ({ incrementCounter, decrementCounter }) => {
  return (
    <div className='right3'>
      <h1>Right3</h1>
      <div className='button-box'>
        <button id='increment' onClick={() => incrementCounter()}>
          <b>Increment</b>
        </button>
        <button id='decrement' onClick={() => decrementCounter()}>
          <b>Decrement</b>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementCounter: () => dispatch(incrementCounter()),
//     decrementCounter: () => dispatch(decrementCounter()),
//   };
// };

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(IncCounter);
