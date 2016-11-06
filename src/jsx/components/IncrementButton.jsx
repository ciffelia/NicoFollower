import React from 'react';
import { Button } from 'react-materialize';

const IncrementButton = props => (
  <Button waves="light" onClick={props.handleClick}>＊増加＊</Button>
);

export default IncrementButton;
