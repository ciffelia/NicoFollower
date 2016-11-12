import React from 'react';
import { connect } from 'react-redux';

import MainTab from '../components/MainTab';
import { changeTab } from '../actions/MainTab';

const mapStateToProps = state => ({ slideIndex: state.mainTabSlideIndex });

const mapDispatchToProps = dispatch => ({
  handleChange: index => { dispatch(changeTab(index)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainTab);
