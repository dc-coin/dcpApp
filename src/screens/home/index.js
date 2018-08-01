import React, { Component } from "react";
import {
  Container, Header, Title,
  Button,
  Icon,
  Left,
  Right,
  Body, Text,
  Tabs, Tab, TabHeading

} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import styles from "./styles";
import stringObj from "../../18n";

import TabCateBest from "./tabs";
import {MainFooter} from "../footer";

class Home extends Component {
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
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>

        <Grid>
          <Row style={{ backgroundColor: "#ddeaf6", height: 120 }}>
            <Text>Banner - Height: 120</Text>
          </Row>

          <Row>
            <Tabs
              locked={true}
              style={{ elevation: 3}}>
              <Tab heading={stringObj.main.cate1.best}>
                <TabCateBest />
              </Tab>
              <Tab heading={stringObj.main.cate1.charge}>
                <TabCateBest />
              </Tab>
              <Tab heading={stringObj.main.cate1.free}>
                <TabCateBest />
              </Tab>
            </Tabs>
          </Row>
        </Grid>

        <MainFooter navigation={this.props.navigation}/>
      </Container>
    );
  }
}

export default Home;
