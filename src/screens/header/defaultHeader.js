import React, { Component } from "react";
import {
  Header, Left, Right, Button, Title, Body, Icon
} from "native-base";

import styles from "./styles";
import stringObj from "../../18n/";

class DefaultHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header style={[styles.dh_header]}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon style={[styles.dh_icon]} name="menu" />
          </Button>
        </Left>
        <Body>
          <Title style={styles.dh_text}>{this.props.title}</Title>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon style={[styles.dh_icon]} name="search" />
          </Button>
        </Right>
      </Header>
    );
  }
}

DefaultHeader.defaultProps  = {
  navigation: null,
  title : stringObj.app.header_app_name
};

export default DefaultHeader;
