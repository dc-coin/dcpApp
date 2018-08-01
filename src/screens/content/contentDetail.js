import React, { Component } from "react";
import { Image, Dimensions } from "react-native";
import {
  Container, Header, Content, List, ListItem, Text, View,
  Left, Right, Button, Title, Body, Icon,
  Form, Item, Input, Thumbnail,
  H3
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from "./contentDetailStyles";
import stringObj from "../../18n/";


const contentData = {
  title: "콘텐츠 타이틀"
};

const thumb = require("../../../assets/drawer-cover.png");

const datas = [
  {
    cate: "notice",
    title: "공지. 연재 주기 공지입니다.",
    tagName: "무료",
    tagClass: "info",
    readCount: "7,248",
    recommend: "0",
    commentCount: "20",
    time: "2018.06.15"
  },
  {
    cate: "notice",
    title: "공지. 유료 전환 공지입니다",
    tagName: "무료",
    readCount: "7,515",
    tagClass: "info",
    recommend: "0",
    commentCount: "99",
    time: "2018.06.15"
  },
  {
    cate: "none",
    title: "92. 콘텐츠 소제목",
    tagName: "구매안됨",
    tagClass: "success",
    readCount: "6,512",
    recommend: "1,576",
    commentCount: "32",
    time: "2018.06.15"
  },
  {
    cate: "none",
    title: "91. 콘텐츠 소제목",
    tagName: "구매안됨",
    tagClass: "success",
    readCount: "6,512",
    recommend: "1,576",
    commentCount: "32",
    time: "2018.06.15"
  },
  {
    cate: "none",
    title: "87. 콘텐츠 소제목",
    tagName: "구매안됨",
    tagClass: "success",
    readCount: "6,512",
    recommend: "1,576",
    commentCount: "32",
    time: "2018.06.15"
  }
];

class ContentDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{stringObj.app.header_app_name}</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Grid>
            <Row style={styles.screenHeader}>
              <Col>
                <H3 style={styles.screenTitle}>{contentData.title}</H3>
              </Col>
              <Col style={styles.screenTitleRight}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Button small bordered>
                    <Icon name='share' />
                  </Button>
                  <Button small bordered>
                    <Icon name='notifications' />
                  </Button>
                  <Button small bordered>
                    <Icon name='star' />
                  </Button>
                </View>
              </Col>
            </Row>
            <Row 
              style={{
              marginHorizontal: 5, paddingBottom: 5,
              borderBottomColor: '#9e9e9e', borderBottomWidth: 1
            }}>
              <Col style={{ width: 120 }} onPress={() => this.props.navigation.navigate("ContentView")}>
                <Image
                  style={{
                    alignSelf: "center",
                    width: 100,
                    height: 120,
                    resizeMode: "cover",
                    marginVertical: 5,
                    marginHorizontal: 10
                  }}
                  source={thumb} />
              </Col>
              <Col onPress={() => this.props.navigation.navigate("ContentView")}>
                <Text note>장르</Text>
                <Text numberOfLines={1}>콘텐츠 타이틀</Text>
                <Text numberOfLines={1} note>작가명</Text>
                <Text note>연재 00화  조회 00,000,000</Text>
                <Text note>선호 00,0000  추천 000,000</Text>
              </Col>
            </Row>
            <Row style={{
              marginTop: 5, paddingBottom: 5,
              borderBottomColor: '#9e9e9e', borderBottomWidth: 1
            }}>
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 13 }}>작품소개</Text>
                <Text note>작품소개내용 작품소개내용  작품소개내용  작품소개내용  작품소개내용  작품소개내용  작품소개내용  작품소개내용  작품소개내용 </Text>
                <Grid style={{ marginTop: 5, borderColor: "#8f8f8f", borderRadius: 5, borderWidth: 1, padding: 5 }}>
                  <Col>
                    <View>
                      <Text style={{ fontSize: 13 }}>편당구매 1DP</Text>
                      <Text style={{ fontSize: 13 }}>일괄구매 98DP</Text>
                    </View>
                  </Col>
                  <Col style={{ width: 140, flexDirection: "row", justifyContent: "space-between", alignSelf: "center" }}>
                    <Button small>
                      <Text>선택구매</Text>
                    </Button>
                    <Button small danger>
                      <Text>일괄구매</Text>
                    </Button>
                  </Col>
                </Grid>
              </View>
            </Row>
            <Row>
              <List
                dataArray={datas}
                renderRow={(data, sectionID, rowID, highlightRow) => {
                  var bg = data.cate === "notice" ? '#ddeaf6' : undefined;
                  var btnColor = data.tagClass === "success" ? "#5cb85c" : "#3F51B5";
                  return (
                    <ListItem style={[{ backgroundColor: bg }, styles.resultListItem]}>
                      <Grid>
                        <Col style={{marginLeft:10}}>
                          <Row>
                            <Text numberOfLines={1}>{data.title}</Text>
                          </Row>
                          <Row style={{}}>
                            <Button small bordered style={[{ height: 12, marginTop:3, marginRight:5}, {borderColor:btnColor}]} >
                              <Text style={{ fontSize: 8, color:btnColor }}>{data.tagName}</Text>
                            </Button>
                            <Text note numberOfLines={1}>{data.time} 조회 {data.readCount} | 추천 {data.recommend}</Text>
                          </Row>
                        </Col>
                        <Col style={{ width: 50, alignItems: 'flex-end', alignSelf: 'center', flexDirection: 'row-reverse' }}>
                          <Button small bordered style={[{ height: 24}]}>
                            <Text>{data.commentCount}</Text>
                          </Button>
                        </Col>
                      </Grid>
                    </ListItem>);
                }
                }
              />
            </Row>

          </Grid>
        </Content>

      </Container >
    );
  }
}

export default ContentDetail;
