import React, { Component } from "react";

import {
  Container, Header, Content, List, ListItem, Text, View,
  Left, Right, Button, Title, Body, Icon, Picker, Form
} from "native-base";
import styles from "./styles";
import stringObj from "../../18n/";

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    const languageList = stringObj.setting.language.languages.map((val, index) => {
      return (
        <Picker.Item label={val.label} value={val.code} key={index}/>
      );
    });

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
            <Title>{stringObj.setting.header_title}</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List>
            {/*언어설정*/}
            <ListItem itemDivider>
              <Text>{stringObj.setting.language.name}</Text>
            </ListItem>
            <ListItem style={{height:50}}>
              <Picker
                mode="dialog"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                placeholder={stringObj.setting.language.select_placeholder}
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                style={{ width: undefined }}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}
              >
              {languageList}
              </Picker>
            </ListItem>

            {/*정보*/}
            <ListItem itemDivider>
              <Text>{stringObj.setting.info.name}</Text>
            </ListItem>
            <ListItem>
              <Text>{stringObj.setting.info.open_source_license}</Text>
            </ListItem>
            <ListItem>
              <View>
                <Text>{stringObj.setting.info.app_name}</Text>
                <Text note>{stringObj.setting.info.version_number}</Text>
              </View>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

Setting.defaultProps = {
  data: {}
};

export default Setting;
