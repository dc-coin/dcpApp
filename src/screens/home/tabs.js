import React, { Component } from "react";
import {
  Content,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
  Text
} from "native-base";

import stringObj from "../../18n";

import TabOne from "./detail";

export default class SubTab extends Component {
  render() {
    return (
      <Tabs
        renderTabBar={() => <ScrollableTab style={{height:40}}/>}>
        <Tab heading={stringObj.main.cate2.ranking}>
          <TabOne />
        </Tab>
        <Tab heading={stringObj.main.cate2.favorite}>
          <TabOne />
        </Tab>
        <Tab heading={stringObj.main.cate2.today}>
          <TabOne />
        </Tab>
        <Tab heading={stringObj.main.cate2.genre}>
          <TabOne />
        </Tab>        
      </Tabs>
    );
  }
}

