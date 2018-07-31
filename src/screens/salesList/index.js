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
    userId: "구매자 아이디",
    dp: 1,
    time: "09:37:27"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.13"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.10"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.09"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.08"
  },
  {
    title: "콘텐츠 타이틀",
    subTitle: "92. 콘텐츠 소제목",
    userId: "구매자 아이디",
    dp: 1,
    time: "2018.07.08"
  }
];

class SalesList extends Component {
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
              <H3 style={styles.screenTitle}>{stringObj.salesList.title}</H3>
            </Col>
            <Col style={styles.screenTitleLink}>
              <Button
                transparent
                iconLeft primary small
                onPress={() => this.props.navigation.openDrawer()}
              >
                <Icon name="arrow-round-forward" />
                <Text>{stringObj.salesList.stellarLink}</Text>
              </Button>
            </Col>
          </Row>
          <Row style={styles.contentSearchBar}>
            <Content>
              <Form style={styles.marginLR20}>
                <Item regular style={styles.contentSearchBarInput}>
                  <Input placeholder={stringObj.salesList.searchPlaceHolder} />
                  <Button style={styles.contentSearchBarButton}>
                    <Text>{stringObj.salesList.btnSearch}</Text>
                  </Button>
                </Item>
              </Form>
            </Content>
          </Row>
          <Row style={styles.resultListView}>
            <List
              dataArray={datas}
              renderRow={(data, sectionID, rowID, highlightRow) => {
                let evenRow = rowID % 2 == 0;
                var bg = evenRow ? '#ddeaf6' : undefined;
                return (
                  <ListItem style={[{ backgroundColor: bg }, styles.resultListItem]}>
                    <Grid>
                      <Col style={[styles.marginL10, styles.resultCol1]}>
                        <Row>
                          <Text numberOfLines={1}>{data.title}</Text>
                        </Row>
                        <Row>
                          <Text note numberOfLines={1}>{data.subTitle}</Text>
                        </Row>
                      </Col>
                      <Col style={styles.resultCol2}>
                        <Text note numberOfLines={1} >{data.userId}</Text>
                      </Col>
                      <Col style={styles.resultCol3}>
                        <Text style={styles.dpAmount}>{data.dp} DP</Text>
                      </Col>
                      <Col style={styles.resultCol4}>
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

export default SalesList;
