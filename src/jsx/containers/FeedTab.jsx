import React from 'react';
import { connect } from 'react-redux';

import FeedTab from '../components/FeedTab';

const mapStateToProps = state => state;

export default connect(mapStateToProps)(FeedTab);
