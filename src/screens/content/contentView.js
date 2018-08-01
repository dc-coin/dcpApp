import React, { Component } from "react";
import { Image, Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import {
  Container, Header, Content, List, ListItem, Text, Left, Right, Button, Title, Body, Icon,
  Picker
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import { DefaultHeader, ContentHeader } from './../header';

import styles from "./contentViewStyles";
import stringObj from "../../18n/";
import { ContentFooter } from "../footer";


const contentData = {
  title: "콘텐츠 타이틀"
};

const thumb = require("../../../assets/drawer-cover.png");

var { width, height } = Dimensions.get('window');

class ContentView extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isModalVisible: true,
    seg: 2,
    selected: undefined
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    const languageList = stringObj.setting.language.languages.map((val, index) => {
      return (
        <Picker.Item label={val.label} value={val.code} key={index} />
      );
    });

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
                onPress={this._toggleModal}
              >{stringObj.content.viewer.warningText}</Text>
            </Content>
          </View>

          <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={() => this.setState({ isModalVisible: false })}
          >
            <View style={styles2.modalContent}>
              <Text style={styles2.modelText}>언어설정</Text>
              <View style={[styles2.modelItemView, styles2.border]}>
                <Picker
                  mode="dialog"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  placeholder={stringObj.setting.language.select_placeholder}
                  placeholderStyle={{ color: "#275787" }}
                  placeholderIconColor="#275787"
                  style={styles2.languagePicker}
                  itemTextStyle={{ color: '#275787' }}
                  textStyle={{ color: '#275787' }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  {languageList}
                </Picker>
              </View>

              <Text style={styles2.modelText}>보기형태</Text>
              <View style={styles2.modelItemView}>
                <Button
                  style={styles2.buttonGroups}
                  rounded={false}
                  bordered={this.state.seg !== 1}
                  onPress={() => this.setState({ seg: 1 })}
                >
                  <Text style={styles2.buttonGroupsText}>페이지형태</Text>
                </Button>
                <Button
                  style={styles2.buttonGroups}
                  rounded={false}
                  bordered={this.state.seg !== 2}
                  onPress={() => this.setState({ seg: 2 })}
                >
                  <Text style={styles2.buttonGroupsText}>스크롤형태</Text>
                </Button>
              </View>

              <Text style={styles2.modelText}>글자체</Text>
              <View style={styles2.modelItemView}>
                <Button
                  style={styles2.buttonGroups}
                  rounded={false}
                  bordered={!(this.state.seg === 1)}
                  onPress={() => this.setState({ seg: 1 })}
                >
                  <Text style={styles2.buttonGroupsText}>나눔명조</Text>
                </Button>
                <Button
                  style={styles2.buttonGroups}
                  rounded={false}
                  bordered={!(this.state.seg === 2)}
                  onPress={() => this.setState({ seg: 2 })}
                >
                  <Text style={styles2.buttonGroupsText}>나눔고딕</Text>
                </Button>
                <Button
                  style={styles2.buttonGroups}
                  rounded={false}
                  bordered={!(this.state.seg === 3)}
                  onPress={() => this.setState({ seg: 3 })}
                >
                  <Text style={styles2.buttonGroupsText}>기본</Text>
                </Button>
              </View>

              <Text style={styles2.modelText}>폰트크기</Text>
              <View style={styles2.modelItemView}>
                <Grid style={styles2.customPickerGrid}>
                  <Col style={styles2.customPickerGridLeft}>
                    <Button transparent style={styles2.customPickerGridButton}>
                      <Icon name='arrow-dropleft' style={styles2.customPickerGridText} />
                    </Button>
                  </Col>
                  <Col style={styles2.customPickerGridBody}>
                    <Text style={styles2.customPickerGridText}>16</Text>
                  </Col>
                  <Col style={styles2.customPickerGridRight}>
                    <Button transparent style={styles2.customPickerGridButton}>
                      <Icon name='arrow-dropright' style={styles2.customPickerGridText} />
                    </Button>
                  </Col>
                </Grid>
              </View>

              <Text style={styles2.modelText}>줄간격</Text>
              <View style={styles2.modelItemView}>
                <Grid style={styles2.customPickerGrid}>
                  <Col style={styles2.customPickerGridLeft}>
                    <Button transparent style={styles2.customPickerGridButton}>
                      <Icon name='arrow-dropleft' style={styles2.customPickerGridText} />
                    </Button>
                  </Col>
                  <Col style={styles2.customPickerGridBody}>
                    <Text style={styles2.customPickerGridText}>140 %</Text>
                  </Col>
                  <Col style={styles2.customPickerGridRight}>
                    <Button transparent style={styles2.customPickerGridButton}>
                      <Icon name='arrow-dropright' style={styles2.customPickerGridText} />
                    </Button>
                  </Col>
                </Grid>
              </View>

              <TouchableOpacity onPress={this._toggleModal}>
                <Text>Hide me!</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Content>

        <ContentFooter navigation={this.props.navigation} />
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
  },

  modalContent: {
    backgroundColor: "white",
    padding: 22,
    paddingTop: 12,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },
  modelItemView: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  modelText: {
    color: '#272c2f',
  },
  border: {
    borderColor: '#275787',
    borderWidth: 0.5
  },
  languagePicker: {
    height: 35,
    color: '#275787',
  },
  buttonGroups: {
    height: 35,
    borderRadius: 0,
    flex: 1,
    justifyContent : 'center',
  },
  buttonGroupsText: {
    alignItems: "center"
  },

  customPickerGrid: { height: 35, backgroundColor: '#275787' },
  customPickerGridLeft: { width: 45 },
  customPickerGridBody: { alignSelf: 'center', alignItems: "center" },
  customPickerGridRight: { width: 45, alignItems: 'flex-end', flexDirection: 'row-reverse' },
  customPickerGridButton: { height: 35, paddingHorizontal: 10 },
  customPickerGridText: { color: '#fff' }
});

export default ContentView;
