import React from 'react';
import { Tabs, Tab } from 'react-materialize';

const ModeTabBar = props => (
  <Tabs>
    <Tab title="検索" />
    <Tab title="フィード" active />
  </Tabs>
);

export default ModeTabBar;
