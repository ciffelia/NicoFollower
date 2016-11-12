import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const IncrementButton = props => (
  <RaisedButton onClick={props.handleClick}>＊増加＊</RaisedButton>
);

IncrementButton.propTypes = {
  handleClick: React.PropTypes.func.isRequired
};

export default IncrementButton;
