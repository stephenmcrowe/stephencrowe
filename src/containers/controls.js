import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { increment, decrement } from '../actions';

const Controls = (props) => {
  const { increment: localIncrement, decrement: localDecrement } = props;
  return (
    <div>
      <button type="button" onClick={localIncrement}>+</button>
      <button type="button" onClick={localDecrement}>-</button>
    </div>
  );
};

export default withRouter(connect(null, { increment, decrement })(Controls));
