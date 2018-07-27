import React, { Component } from "react";

import {
  Container, Header, Content, List, ListItem, Text,
  Left, Right, Button, Title, Body, Icon,
  Form, Item, Input,
  H3
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';

import styles from "./styles";
import stringObj from "../../18n/";

const datas = [
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "09:37:27"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.13"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.10"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.09"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    dp: 1,
    time: "2018.07.08"
  }
];

class PurchaseList extends Component {
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

        <Grid>
          <Row style={styles.screenHeader}>
            <Col>
              <H3 style={styles.screenTitle}>{stringObj.purchaseList.title}</H3>
            </Col>
            <Col style={styles.screenTitleLink}>
              <Button
                transparent
                iconLeft primary small
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Icon name="arrow-round-forward" />
                <Text>{stringObj.purchaseList.stellarLink}</Text>
              </Button>
            </Col>
          </Row>
          <Row style={styles.contentSearchBar}>
            <Content>
              <Form style={styles.marginLR20}>
                <Item regular style={styles.contentSearchBarInput}>
                  <Input placeholder={stringObj.purchaseList.searchPlaceHolder} />
                  <Button style={styles.contentSearchBarButton}>
                    <Text>{stringObj.purchaseList.btnSearch}</Text>
                  </Button>
                </Item>
              </Form>
            </Content>
          </Row>
          <Row>
            <List 
              dataArray={datas}
              renderRow={(data, sectionID, rowID, highlightRow) => {
                let evenRow = rowID % 2 == 0;
                var bg = evenRow ? '#ddeaf6' : undefined;
                return (
                  <ListItem style={[{ backgroundColor: bg}, styles.resultListItem]}>
                    <Grid>
                      <Col size={5} style={styles.resultCol}>
                        <Content style={styles.marginL20}>
                          <Text numberOfLines={1}>{data.title}</Text>
                          <Text note numberOfLines={1}>{data.subTitle}</Text>
                        </Content>
                      </Col>
                      <Col size={2} style={styles.resultCol}>
                        <Text style={{ textAlign: "center" }}>{data.dp} DP</Text>
                      </Col>
                      <Col size={2.5} style={styles.resultCol}>
                        <Text note numberOfLines={1} >{data.time}</Text>
                      </Col>
                    </Grid>
                  </ListItem>);
                }
              }
            />
          </Row>
        </Grid>


      </Container>
    );
  }
}

export default PurchaseList;
