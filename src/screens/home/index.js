import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, View } from "react-native";
import {
  Container,
  Text, Tabs, Tab

} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import Carousel from 'react-native-banner-carousel';

import { DefaultHeader } from './../header';
import { MainFooter } from "../footer";
import TabCateBest from "./tabs";

import styles from "./styles";
import stringObj from "../../18n";

const cardOne = require("../../../assets/swiper-1.png");
const cardTwo = require("../../../assets/swiper-2.png");
const cardThree = require("../../../assets/swiper-3.png");
const cardFour = require("../../../assets/swiper-4.png");


const images = [
  cardOne, cardTwo, cardThree, cardFour
];

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 260;

class Home extends Component {
  constructor(props) {
    super(props);
  }

  renderPage(image, index) {
    return (
      <View key={index}>
        <Image style={{ width: BannerWidth, height: BannerHeight }} source={image} />
      </View>
    );
  }

  render() {

    return (
      <Container style={styles.container}>
        <DefaultHeader navigation={this.props.navigation} />

        <Grid>
          <Row style={{ backgroundColor: "#ddeaf6", height: 130 }}>
            <Carousel
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}
              pageSize={BannerWidth}
              pageIndicatorContainerStyle={styles2.pageIndicatorContainerStyle}
              activePageIndicatorStyle={styles2.activePageIndicatorStyle}
              pageIndicatorContainerStyle={styles2.pageIndicatorContainerStyle}
            >
              {images.map((image, index) => this.renderPage(image, index))}
            </Carousel>
          </Row>

          <Row>
            <Tabs
              locked={true}
              style={{ elevation: 3 }}>
              <Tab heading={stringObj.main.cate1.best}>
                <TabCateBest navigation={this.props.navigation} />
              </Tab>
              <Tab heading={stringObj.main.cate1.charge}>
                <TabCateBest navigation={this.props.navigation} />
              </Tab>
              <Tab heading={stringObj.main.cate1.free}>
                <TabCateBest navigation={this.props.navigation} />
              </Tab>
            </Tabs>
          </Row>
        </Grid>

        <MainFooter navigation={this.props.navigation} />
      </Container>
    );
  }
}

const styles2 = StyleSheet.create({
  pageIndicatorStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 5,
    backgroundColor: 'rgba(0,0,0,.4)'
  },
  activePageIndicatorStyle: {
    position: 'absolute',
    backgroundColor: '#ff0000',
  },
  pageIndicatorContainerStyle: {
    position: 'absolute',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    bottom: 10,
    marginHorizontal:10
  }
});

export default Home;
