import React, { Component } from "react";
import { Image, View } from "react-native";
import {
  Container, Content, Text, Button
} from "native-base";

import { ContentHeader } from '../header';
import { MainFooter } from "../footer";

import styles from "./contentPaymentStyle";
import stringObj from "../../18n/";

const contentData = {
  title: "콘텐츠 타이틀",
  subTitle: "콘덴츠 소제목"
};

const thumb = require("../../../assets/drawer-cover.png");

class ContentBuy extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seg: 2,
      selected: undefined
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <ContentHeader navigation={this.props.navigation}
          title={contentData.subTitle} subTitle={contentData.title} />

        <Content style={styles.opacityBackground}>
          <View style={styles.panelView}>
            <Text style={[{ fontSize: 20},styles.descText, styles.whiteText]}>{stringObj.content.payment.desc}</Text>

            <View style={styles.circleView}>
              <Text style={[{ fontSize: 20}, styles.whiteText, styles.myPointText]}>{stringObj.content.payment.myPoint}</Text>
              <Text style={[{ fontSize: 30}, styles.whiteText]}>10,000</Text>
              <Text style={[{ fontSize: 16}, styles.whiteText]}> DP</Text>
            </View>

            <View style={styles.buttonView}>
              <Button
                style={[styles.buttonGroups, {flex:2}]}
                rounded={false}
              >
                <Text style={{fontSize:16}}>{stringObj.content.payment.btnBuy}</Text>
              </Button>
              <Button
                style={[styles.buttonGroups, {flex:1}]}
                rounded={false}
                bordered={true}
              >
                <Text style={{fontSize:16}}>{stringObj.content.payment.btnPointCharge}</Text>
              </Button>
            </View>
          </View>


        </Content>

        <MainFooter
          navigation={this.props.navigation}
        />

      </Container >
    );
  }
}

export default ContentBuy;
