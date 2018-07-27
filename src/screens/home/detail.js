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
    text: "Kumar Pratik",
    note: "Its time to build a difference . .",
    time: "3:43 pm"
  },
  {
    num : 2,
    img: sanket,
    text: "Kumar Sanket",
    note: "One needs courage to be happy and smiling all time . . ",
    time: "1:12 pm"
  },
  {
    num : 3,
    img: megha,
    text: "Megha",
    note: "Live a life style that matchs your vision",
    time: "10:03 am"
  },
  {
    num : 4,
    img: atul,
    text: "Atul Ranjan",
    note: "Failure is temporary, giving up makes it permanent",
    time: "5:47 am"
  },
  {
    num : 5,
    img: saurabh,
    text: "Saurabh Sahu",
    note: "The biggest risk is a missed opportunity !!",
    time: "11:11 pm"
  },
  {
    num : 6,
    img: varun,
    text: "Varun Sahu",
    note: "Wish I had a Time machine . .",
    time: "8:54 pm"
  }
];

export default class TabOne extends Component {
  render() {
    return (
      <List
          dataArray={datas}
          renderRow={data =>
          <ListItem thumbnail>
            <Left>
              <Text note style={{paddingRight: 10}}>{data.num}</Text>
              <Thumbnail square source={data.img} />
            </Left>
            <Body>
              <Text note>장르</Text>
              <Text numberOfLines={1}>{data.text}</Text>
              <Text numberOfLines={1} note>{data.note}</Text>
              <Text note style={{fontSize: 10}}>총 00회 | 2018-06-28</Text>
            </Body> 
            
            {/*
             
            <Grid>
              <Col size={0.1}><Text note>{data.num}</Text></Col>
              <Col size={0.3}><Thumbnail square source={data.img}/></Col>
              <Col size={0.6} style={{alignItems: 'left'}}>
                <Text note style={{textAlign: 'left'}}>장르</Text>
                <Text numberOfLines={1} style={{textAlign: 'left'}}>{data.text}</Text>
                <Text numberOfLines={1} note style={{textAlign: 'left'}}>{data.note}</Text>
                <Text note style={{textAlign: 'left'}}>총 00회 | 2018-06-28</Text>
              </Col>
            </Grid>
            */}
          </ListItem>}
        />
    );
  }
}
