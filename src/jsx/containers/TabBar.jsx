import React from 'react';
import { connect } from 'react-redux';

import TabBar from '../components/TabBar';
import { changeTab } from '../actions/TabBar';

const mapStateToProps = state => ({ slideIndex: state.mainTabSlideIndex });

const mapDispatchToProps = dispatch => ({
  handleChange: index => { dispatch(changeTab(index)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);
