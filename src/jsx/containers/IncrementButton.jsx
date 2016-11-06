import React from 'react';
import { connect } from 'react-redux';

import IncrementButton from '../components/IncrementButton';
import { increment } from '../actions/IncrementButton';

// Stateに処理を加えてPropsとして渡せる
// ここでは何もせずにそのまま渡している
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(increment()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(IncrementButton);
