import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";
import {
  Container, Content, Text
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import { DefaultHeader, ContentHeader } from './../header';
import { ContentFooter } from "../footer";
import ViewerSetting from "./viewerSetting";

import styles from "./contentViewStyles";
import stringObj from "../../18n/";

const contentData = {
  title: "콘텐츠 타이틀"
};

const thumb = require("../../../assets/drawer-cover.png");

var { width, height } = Dimensions.get('window');

class ContentView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isViewerSettingModalVisible: false,
      seg: 2,
      selected: undefined
    };
  }

  render() {
    return (
      <Container style={styles.container}>
        <DefaultHeader navigation={this.props.navigation} />
        <ContentHeader navigation={this.props.navigation}
          title="콘덴츠 소제목" subTitle="콘텐츠 타이틀" />

        <Content>
          <Image
            style={{
              alignSelf: "center",
              resizeMode: "cover"
            }}
            source={thumb} />
          <Image
            style={{
              alignSelf: "center",
              resizeMode: "cover"
            }}
            source={thumb} />

          <View style={[styles2.overlay]}>
            <Content>
              <Text style={{ color: "#fff", marginHorizontal: 10, marginVertical: 10 }}
              >{stringObj.content.viewer.warningText}</Text>
            </Content>
          </View>

          <Modal
            isVisible={this.state.isViewerSettingModalVisible}
            animationInTiming={200}
            animationOutTiming={200}
            onBackdropPress={() => this.setState({ isViewerSettingModalVisible: false })}>
            <ViewerSetting 
              onClose={()=>this.setState({ isViewerSettingModalVisible: false })}/>
          </Modal>
        </Content>

        <ContentFooter
          navigation={this.props.navigation}
          onViewerSetting={()=>this.setState({ isViewerSettingModalVisible: true })}
        />
      </Container >
    );
  }
}

var styles2 = StyleSheet.create({
  overlay: {
    //flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width
  }
});

export default ContentView;
