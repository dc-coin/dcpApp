import React from "react";
import { Root } from "native-base";
import { createStackNavigator , createDrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import SideBar from "./screens/sidebar";
import Setting from "./screens/setting";

import {ContentDetail, ContentView, ContentPayment} from "./screens/content";
import PurchaseList from "./screens/purchaseList";
import SalesList from "./screens/salesList";
import MusicSearchES from "./screens/music";

const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },

    ContentDetail : {screen: ContentDetail},
    ContentView : {screen: ContentView},
    ContentPayment : {screen: ContentPayment},
    PurchaseList : {screen: PurchaseList},
    SalesList : {screen: SalesList},
    Setting : {screen: Setting},

    MusicSearchES : {screen: MusicSearchES},
    
  },
  {
    //initialRouteName: "Home",
    initialRouteName: "Home",    
    
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    
    Home : {screen: Home},

    ContentDetail : {screen: ContentDetail},
    ContentView : {screen: ContentView},
    ContentPayment : {screen: ContentPayment},
    PurchaseList : {screen: PurchaseList},
    SalesList : {screen: SalesList},
    Setting : {screen: Setting},

    MusicSearchES : {screen: MusicSearchES},

  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
