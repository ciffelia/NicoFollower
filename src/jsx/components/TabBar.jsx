import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';

import SearchTab from '../containers/SearchTab';
import FeedTab from '../containers/FeedTab';

const TabBar = props => (
  <Tabs>
    <Tab label="検索"><SearchTab /></Tab>
    <Tab label="フィード"><FeedTab /></Tab>
  </Tabs>
);

TabBar.propTypes = {};

export default TabBar;
