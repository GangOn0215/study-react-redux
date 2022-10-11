import React from 'react';
import { connect } from 'react-redux';
import { actionLogin, actionLogout } from '../redux/auth/actions';

export const Login = ({ auth, actionLogin, actionLogout }) => {
  console.log(auth);
  return (
    <div className='right3'>
      <h1>Login</h1>
      <div className='button-box'>
        {auth.isAuth ? (
          <button id='decrement' onClick={() => actionLogout()}>
            <b>Logout</b>
          </button>
        ) : (
          <button id='login' onClick={() => actionLogin()}>
            <b>Login</b>
          </button>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {
  actionLogin: actionLogin,
  actionLogout: actionLogout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
