import React from 'react';
import { connect } from 'react-redux';

export const CheckLogin = ({ auth }) => {
  return (
    <div>
      <h1>Login</h1>
      {auth.isAuth ? <h3>Welcome {auth.id}</h3> : 'Please Login'}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckLogin);
