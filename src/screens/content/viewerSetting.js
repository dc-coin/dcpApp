import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Text, Button, Icon, Picker
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import stringObj from "../../18n/";


const { width, height } = Dimensions.get('window');

class ViewerSetting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languageSelected: undefined,
      viewerType: 1,
      fontType: 2,
      fontSize: 16,
      lineHeight: 140
    };

    this.handleDecreaseFontSize = this.handleDecreaseFontSize.bind(this);
    this.handleIncreaseFontSize = this.handleIncreaseFontSize.bind(this);
    this.handleDecreaseLineHeight = this.handleDecreaseLineHeight.bind(this);
    this.handleIncreaseLineHeight = this.handleIncreaseLineHeight.bind(this);
  }

  onLanguageValueChange(value) {
    this.setState({
      languageSelected: value
    });
  }

  handleDecreaseFontSize(){
    if(this.state.fontSize > 5){
      this.setState({fontSize : --this.state.fontSize});
    }
  }

  handleIncreaseFontSize(){
    if(this.state.fontSize < 25){
      this.setState({fontSize : ++this.state.fontSize});
    }
  }

  handleDecreaseLineHeight(){
    if(this.state.lineHeight > 50){
      this.setState({lineHeight : this.state.lineHeight-10});
    }
  }

  handleIncreaseLineHeight(){
    if(this.state.lineHeight < 200){
      this.setState({lineHeight : this.state.lineHeight+10});
    }
  }

  render() {
    const languageList = stringObj.setting.language.languages.map((val, index) => {
      return (
        <Picker.Item label={val.label} value={val.code} key={index} />
      );
    });

    return (
      <View>
        <View style={styles2.modalContent}>
          <Text style={styles2.modalText}>{stringObj.content.viewerSetting.setLanguage}</Text>
          <View style={[styles2.modalItemView, styles2.border]}>
            <Picker
              mode="dialog"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder={stringObj.setting.language.select_placeholder}
              placeholderStyle={styles2.defaultColor}
              placeholderIconColor={lineColor}
              style={styles2.languagePicker}
              itemTextStyle={styles2.defaultColor}
              textStyle={styles2.defaultColor}
              selectedValue={this.state.languageSelected}
              onValueChange={this.onLanguageValueChange.bind(this)}
            >
              {languageList}
            </Picker>
          </View>

          <Text style={styles2.modalText}>{stringObj.content.viewerSetting.viewerType}</Text>
          <View style={styles2.modalItemView}>
            <Button
              style={styles2.buttonGroups}
              rounded={false}
              bordered={!(this.state.viewerType === 1)}
              onPress={() => this.setState({ viewerType: 1 })}
            >
              <Text style={styles2.buttonGroupsText}>{stringObj.content.viewerSetting.viewerTypePage}</Text>
            </Button>
            <Button
              style={styles2.buttonGroups}
              rounded={false}
              bordered={!(this.state.viewerType === 2)}
              onPress={() => this.setState({ viewerType: 2 })}
            >
              <Text style={styles2.buttonGroupsText}>{stringObj.content.viewerSetting.viewerTypeScroll}</Text>
            </Button>
          </View>

          <Text style={styles2.modalText}>{stringObj.content.viewerSetting.fontStyle}</Text>
          <View style={styles2.modalItemView}>
            <Button
              style={styles2.buttonGroups}
              rounded={false}
              bordered={!(this.state.fontType === 1)}
              onPress={() => this.setState({ fontType: 1 })}
            >
              <Text style={styles2.buttonGroupsText}>{stringObj.content.viewerSetting.fontStyle1}</Text>
            </Button>
            <Button
              style={styles2.buttonGroups}
              rounded={false}
              bordered={!(this.state.fontType === 2)}
              onPress={() => this.setState({ fontType: 2 })}
            >
              <Text style={styles2.buttonGroupsText}>{stringObj.content.viewerSetting.fontStyle2}</Text>
            </Button>
            <Button
              style={styles2.buttonGroups}
              rounded={false}
              bordered={!(this.state.fontType === 3)}
              onPress={() => this.setState({ fontType: 3 })}
            >
              <Text style={styles2.buttonGroupsText}>{stringObj.content.viewerSetting.fontStyleDefault}</Text>
            </Button>
          </View>

          <Text style={styles2.modalText}>{stringObj.content.viewerSetting.fontSize}</Text>
          <View style={styles2.modalItemView}>
            <Grid style={styles2.customPickerGrid}>
              <Col style={styles2.customPickerGridLeft}>
                <Button transparent 
                  onPress={this.handleDecreaseFontSize}
                  style={styles2.customPickerGridButton}>
                  <Icon name='arrow-dropleft' style={styles2.customPickerGridText} />
                </Button>
              </Col>
              <Col style={styles2.customPickerGridBody}>
                <Text style={styles2.customPickerGridText}>{this.state.fontSize}</Text>
              </Col>
              <Col style={styles2.customPickerGridRight}>
                <Button transparent
                  onPress={this.handleIncreaseFontSize}
                  style={styles2.customPickerGridButton}>
                  <Icon name='arrow-dropright' style={styles2.customPickerGridText} />
                </Button>
              </Col>
            </Grid>
          </View>

          <Text style={styles2.modalText}>{stringObj.content.viewerSetting.lineHeight}</Text>
          <View style={styles2.modalItemView}>
            <Grid style={styles2.customPickerGrid}>
              <Col style={styles2.customPickerGridLeft}>
                <Button transparent 
                  onPress={this.handleDecreaseLineHeight}
                  style={styles2.customPickerGridButton}>
                  <Icon name='arrow-dropleft' style={styles2.customPickerGridText} />
                </Button>
              </Col>
              <Col style={styles2.customPickerGridBody}>
                <Text style={styles2.customPickerGridText}>{this.state.lineHeight} %</Text>
              </Col>
              <Col style={styles2.customPickerGridRight}>
                <Button transparent 
                  onPress={this.handleIncreaseLineHeight}
                  style={styles2.customPickerGridButton}>
                  <Icon name='arrow-dropright' style={styles2.customPickerGridText} />
                </Button>
              </Col>
            </Grid>
          </View>

        </View>

        <Button danger onPress={this.props.onClose} style={styles2.closeBtn}>
          <Icon name="close" style={styles2.closeBtnIcon} />
        </Button>
      </View>
    );
  }
}

ViewerSetting.defaultProps = {
  onClose: () => { console.error("close function not defined"); }
};

const textColor = "#272c2f";
const lineColor = "#275787";
var styles2 = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 22,
    paddingTop: 12,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
  },

  modalItemView: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },

  modalText: {
    color: textColor,
  },

  defaultColor: {
    color: lineColor
  },

  border: {
    borderColor: lineColor,
    borderWidth: 0.5
  },

  languagePicker: {
    height: 35,
    color: lineColor,
  },

  buttonGroups: {
    height: 35,
    borderRadius: 0,
    flex: 1,
    justifyContent: 'center',
  },

  buttonGroupsText: {
    alignItems: "center"
  },

  customPickerGrid: { height: 35, backgroundColor: lineColor },
  customPickerGridLeft: { width: 45 },
  customPickerGridBody: { alignSelf: 'center', alignItems: "center" },
  customPickerGridRight: { width: 45, alignItems: 'flex-end', flexDirection: 'row-reverse' },
  customPickerGridButton: { height: 35, paddingHorizontal: 10 },
  customPickerGridText: { color: '#fff' },
  closeBtn: {
    position: 'absolute',
    left: width - 67,
    top: 0,
    opacity: 1,
    height: 28
  },
  closeBtnIcon: {
    fontSize: 22
  }
});

export default ViewerSetting;
