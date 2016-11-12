import React from 'react';
import { connect } from 'react-redux';

import IncrementChip from '../components/IncrementChip';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(IncrementChip);
