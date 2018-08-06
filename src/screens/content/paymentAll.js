import React, { Component } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import {
  Text, Button, Icon, Picker, Content
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import stringObj from "../../18n/";
import styles from "../footer/styles";


const { width, height } = Dimensions.get('window');

class PaymentAll extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }



  render() {
    return (
      <View>
        <View style={styles2.modalContent}>
          <View style={styles2.descriptionView}>
            <Text style={styles2.whiteText}>일괄구매하기</Text>
            <Text style={styles2.whiteText}>현재 연재되어 있는 글을 일괄 구매합니다.</Text>
            <Text style={styles2.whiteText}>※ 이미 구매/대여한 편은 구매되지 않습니다.</Text>
          </View>

          <View style={[styles2.modalItemView, { marginHorizontal: 5, marginTop: 20 }]}>
            <View style={styles2.itemLeft}>
              <Text style={[]}>구매예정금액</Text>
              <Text style={styles2.blueText}>98DP</Text>
              <Text style={[]}>98편</Text>
            </View>
            <View style={styles2.itemBody}>
              <Text style={[]}>보유 포인트</Text>
              <Text style={[]}>1008DP</Text>
            </View>
            <View style={styles2.itemRight}>
              <Text style={[]}>구매 후 잔액</Text>
              <Text style={[]}>990DP</Text>
            </View>
          </View>

          <View style={[styles2.buttonView]}>
            <Button
              style={[styles2.buttonGroups, { flex: 2 }]}
              rounded={false}
            >
              <Text style={{ fontSize: 16 }}>일괄 구매하기</Text>
            </Button>
            <Button
              onPress={this.props.onClose}
              style={[styles2.buttonGroups, { flex: 1 }]}
              rounded={false}
              bordered={true}
            >
              <Text style={{ fontSize: 16 }}>취소</Text>
            </Button>
          </View>

        </View>
      </View>
    );
  }
}

PaymentAll.defaultProps = {
  onClose: () => { console.error("close function not defined"); }
};

const textColor = "#272c2f";
const lineColor = "#275787";
var styles2 = StyleSheet.create({
  modalContent: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  descriptionView: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#7f7f7f",    
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomColor: '#474747',
    borderBottomWidth: 1
  },

  modalItemView: {
    flexDirection: "row",
    justifyContent: "center",
  },

  itemLeft : {
    flex: 1, borderRightColor: '#d9d9d9', borderRightWidth: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  itemBody : {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  itemRight : {
    flex: 1, borderLeftColor: '#d9d9d9', borderLeftWidth: 1,
              justifyContent: "flex-start",
              alignItems: "center",
  },

  buttonView: {    
    marginHorizontal: 30,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },

  blueText : {
    color: "#2e75b6",
  },

  whiteText: {
    color: "white",
  },

  modalText: {
    color: textColor,
  },

  defaultColor: {
    color: lineColor
  },

  buttonGroups: {
    height: 40,
    borderRadius: 0,
    flex: 1,
    justifyContent: 'center',
  },
});

export default PaymentAll;
