import React from 'react';
import { Chip } from 'react-materialize';

const IncrementChip = props => (
  <Chip>{props.counter}</Chip>
);

export default IncrementChip;
