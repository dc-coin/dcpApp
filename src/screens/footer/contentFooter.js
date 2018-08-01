import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Button,
  Icon,
  Text,
  Footer,
  FooterTab,
  Badge
} from "native-base";

import stringObj from "../../18n";

class ContentFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      tab5: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false
    });
  }
  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      tab5: false
    });
  }
  toggleTab5() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: true
    });
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button active={this.state.tab1} onPress={this.props.onViewerSetting}>
            <Icon active={this.state.tab1} name="settings" />
            <Text style={{ fontSize: 9 }}>{stringObj.footer.content.setting}</Text>
          </Button>
          <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
            <Icon active={this.state.tab2} name="chatboxes" />
            <Badge style={styles2.overlay}>
              <Text style={{fontSize:8, lineHeight:11}}>200</Text>
            </Badge>
            <Text style={{ fontSize: 9 }}>{stringObj.footer.content.reply}</Text>
          </Button>
          <Button active={this.state.tab3} onPress={() => this.props.navigation.goBack()}>
            <Icon active={this.state.tab3} name="arrow-dropleft" />
            <Text style={{ fontSize: 9 }}>{stringObj.footer.content.prev}</Text>
          </Button>
          <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
            <Icon active={this.state.tab4} name="arrow-dropright" />
            <Text style={{ fontSize: 9 }}>{stringObj.footer.content.next}</Text>
          </Button>
          <Button active={this.state.tab5} onPress={() => this.toggleTab5()}>
            <Icon active={this.state.tab5} name="list" />
            <Text style={{ fontSize: 9 }}>{stringObj.footer.content.contents}</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

ContentFooter.defaultProps = {
  onViewerSetting: () => { console.error("onViewerSetting function not defined"); }
};

var styles2 = StyleSheet.create({
  overlay: {
    //flex: 1,
    position: 'absolute',
    left: 35,
    top: 5,
    //opacity: 0.5,
    //backgroundColor: 'black',
    //width: 20,
    height: 12,
    backgroundColor:'#de255d'   
  }  
});

export default ContentFooter;
