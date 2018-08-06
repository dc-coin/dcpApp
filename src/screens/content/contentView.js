import React, { Component } from "react";
import { Image, View } from "react-native";
import Modal from "react-native-modal";
import {
  Container, Content, Text
} from "native-base";

import { ContentHeader } from '../header';
import { ContentFooter } from "../footer";
import ViewerSetting from "./viewerSetting";

import styles from "./contentViewStyles";
import stringObj from "../../18n/";

const contentData = {
  title: "콘텐츠 타이틀",
  subTitle : "콘덴츠 소제목"
};

const thumb = require("../../../assets/drawer-cover.png");

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
        <ContentHeader navigation={this.props.navigation}
          title={contentData.subTitle} subTitle={contentData.title} />

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

          <View style={styles.descOverlay}>
            <Content>
              <Text style={styles.descOverlayText}
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

export default ContentView;
