import React from 'react';
import { connect } from 'react-redux';

import SearchTab from '../components/SearchTab';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(SearchTab);
