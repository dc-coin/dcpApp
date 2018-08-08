import React, { Component } from "react";
import {
  Content,
  Icon,
  Card, CardItem, Text,
  Left, Right, Body, Thumbnail,
  List, ListItem,
  Grid, Col
} from "native-base";

const logo = require("../../../assets/logo.png");
const pratik = require("../../../assets/contacts/pratik.png");
const sanket = require("../../../assets/contacts/sanket.png");
const megha = require("../../../assets/contacts/megha.png");
const atul = require("../../../assets/contacts/atul.png");
const saurabh = require("../../../assets/contacts/saurabh.png");
const varun = require("../../../assets/contacts/varun.png");
const datas = [
  {
    num : 1,
    img: pratik,
    text: "콘텐츠 타이틀1",
    note: "34. 콘텐츠 소제목",
    times : 21,
    date : "2018-05-21"
  },
  {
    num : 2,
    img: sanket,
    text: "콘텐츠 타이틀2",
    note: "3. 콘텐츠 소제목 콘텐츠 소제목 콘텐츠 소제목",
    times : 95,
    date : "2018-05-24"
  },
  {
    num : 3,
    img: megha,
    text: "콘텐츠 타이틀1",
    note: "36. 콘텐츠 소제목",
    times : 57,
    date : "2018-05-30"
  },
  {
    num : 4,
    img: atul,
    text: "콘텐츠 타이틀2",
    note: "4. 콘텐츠 소제목 콘텐츠 소제목 콘텐츠 소제목",
    times : 55,
    date : "2018-06-12"
  },
  {
    num : 5,
    img: saurabh,
    text: "콘텐츠 타이틀1",
    note: "37. 콘텐츠 소제목",
    times : 86,
    date : "2018-06-25"
  },
  {
    num : 6,
    img: varun,
    text: "콘텐츠 타이틀1",
    note: "38. 콘텐츠 소제목",
    times : 5,
    date : "2018-06-30"
  }
];

export default class TabOne extends Component {
  render() {
    return (
      <List
          dataArray={datas}
          renderRow={data =>
          <ListItem thumbnail onPress={() => this.props.navigation.navigate("ContentDetail")}>
            <Left>
              <Text note style={{paddingRight: 10}}>{data.num}</Text>
              <Thumbnail square source={data.img} />
            </Left>
            <Body>
              <Text note>장르</Text>
              <Text numberOfLines={1}>{data.text}</Text>
              <Text numberOfLines={1} note>{data.note}</Text>
              <Text note style={{fontSize: 10}}>총 {data.times}회 | {data.date}</Text>
            </Body> 
          </ListItem>}
        />
    );
  }
}
