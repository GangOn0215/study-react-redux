import React from 'react';
import { connect } from 'react-redux';
import { actionLogin } from '../redux/auth/actions';

export const Login = ({ auth }) => {
  return (
    <div className='right3'>
      <h1>Right3</h1>
      <div className='button-box'>
        <button id='increment'>
          <b>Increment</b>
        </button>
        <button id='decrement'>
          <b>Decrement</b>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     incrementCounter: () => dispatch(incrementCounter()),
//     decrementCounter: () => dispatch(decrementCounter()),
//   };
// };

const mapDispatchToProps = {
  actionLogin: actionLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
