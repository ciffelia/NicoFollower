import React from 'react';
import { Row, Col } from 'react-materialize';

import ModeTabBar from './ModeTabBar';
import IncrementChip from '../containers/IncrementChip';
import IncrementButton from '../containers/IncrementButton';

const App = props => (
  <div>
    <ModeTabBar />

    <div className="container">
      <Row>
        <Col s={2}>
          First column
        </Col>
        <Col>
          abc
        </Col>
      </Row>

      <IncrementButton /> <IncrementChip />
    </div>
  </div>
);

export default App;
