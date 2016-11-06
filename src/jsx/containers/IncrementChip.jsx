import React from 'react';
import { connect } from 'react-redux';

import IncrementChip from '../components/IncrementChip';

// Stateに処理を加えてPropsとして渡せる
// ここでは何もせずにそのまま渡している
const mapStateToProps = state => state;

export default connect(mapStateToProps)(IncrementChip);
