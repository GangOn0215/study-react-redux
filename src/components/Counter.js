import React from 'react';
import { connect } from 'react-redux';

export const Counter = ({ auth, counter }) => {
  return (
    <div>
      <h1>Counter - {counter.number} </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

// export default Counter;
export default connect(mapStateToProps)(Counter);
