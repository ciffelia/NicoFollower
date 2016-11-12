import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import MainTab from '../containers/MainTab';
import IncrementChip from '../containers/IncrementChip';
import IncrementButton from '../containers/IncrementButton';

const App = props => (
  <div>
    <MainTab />

    <Grid>
      <Row>
        <Col xs={2}>
          First column
        </Col>
        <Col xs={10}>
          abc
        </Col>
      </Row>
    </Grid>

    <IncrementButton /> <IncrementChip />
  </div>
);

export default App;
