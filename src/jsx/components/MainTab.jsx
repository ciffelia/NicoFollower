import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Tabs, Tab } from 'material-ui/Tabs';

import SearchTab from '../containers/SearchTab';
import FeedTab from '../containers/FeedTab';

const MainTab = props => (
  <div>
    <Tabs value={props.slideIndex} onChange={props.handleChange}>
      <Tab label="フィード" value={0} />
      <Tab label="検索" value={1} />
    </Tabs>
    <SwipeableViews index={props.slideIndex} onChangeIndex={props.handleChange}>
      <FeedTab />
      <SearchTab />
    </SwipeableViews>
  </div>
);

MainTab.propTypes = {
  slideIndex: React.PropTypes.number.isRequired,
  handleChange: React.PropTypes.func.isRequired
};

export default MainTab;
