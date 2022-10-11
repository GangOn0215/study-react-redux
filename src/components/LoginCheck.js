import React from 'react';
import { connect } from 'react-redux';

export const LoginCheck = ({ auth }) => {
  return (
    <div>
      <h1>Login</h1>
      {auth.isAuth ? (
        <>
          Welcome <b>{auth.memberInfo.id}</b>
        </>
      ) : (
        'Please Login'
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCheck);
