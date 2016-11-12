import React from 'react';
import Chip from 'material-ui/Chip';

const IncrementChip = props => (
  <Chip>{props.counter}</Chip>
);

IncrementChip.propTypes = {
  counter: React.PropTypes.number.isRequired
};

export default IncrementChip;
