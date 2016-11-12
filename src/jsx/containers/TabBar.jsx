import React from 'react';
import { connect } from 'react-redux';

import TabBar from '../components/TabBar';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TabBar);
