import React from 'react';
import { connect } from 'react-redux';

export const CountCheck = ({ counter }) => {
  return (
    <div>
      <h1>CountCheck - {counter.number} </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

// export default CountCheck;
export default connect(mapStateToProps)(CountCheck);
