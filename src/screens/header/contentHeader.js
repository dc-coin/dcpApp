import React, { Component } from "react";
import {
  Header, Left, Right, Button, Title, Body, Icon, Subtitle
} from "native-base";

import styles from "./styles";
import stringObj from "../../18n/";

class ContentHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Header style={styles.ch_header}>
        <Left style={{flex:0.4}}>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("ContentDetail")}
          >
            <Icon style={styles.ch_icon} name="arrow-back" />
          </Button>
        </Left>
        <Body style={{flex:1.6}}>
          <Title style={styles.ch_title}>{this.props.title}</Title>
          <Subtitle style={styles.ch_subTitle}>{this.props.subTitle}</Subtitle>
        </Body>
        <Right style={{flex:0.4}}>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Icon style={styles.ch_icon} name="star" />
          </Button>
        </Right>
      </Header>
    );
  }
}

ContentHeader.defaultProps = {
  navigation: null,
  title: 'Content SubTtitle, SubTtitle',
  subTitle: 'Content Title'
};

export default ContentHeader;
