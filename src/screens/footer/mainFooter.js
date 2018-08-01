import React, { Component } from "react";
import {
  Button,
  Icon,
  Text,
  Footer,
  FooterTab
} from "native-base";

import styles from "./styles";
import stringObj from "../../18n";

class MainFooter extends Component {
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
          <Button active={this.state.tab1} onPress={() => this.props.navigation.goBack()}>
            <Icon active={this.state.tab1} name="arrow-dropleft" />
            <Text style={{fontSize: 9}}>{stringObj.footer.main.prev}</Text>
          </Button>
          <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
            <Icon active={this.state.tab2} name="arrow-dropright" />
            <Text style={{fontSize: 9}}>{stringObj.footer.main.next}</Text>
          </Button>
          <Button active={this.state.tab3} onPress={() => this.props.navigation.navigate("Home")}>
            <Icon active={this.state.tab3} name="home" />
            <Text style={{fontSize: 9}}>{stringObj.footer.main.main}</Text>
          </Button>
          <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
            <Icon active={this.state.tab4} name="refresh" />
            <Text style={{fontSize: 9}}>{stringObj.footer.main.refresh}</Text>
          </Button>
          <Button active={this.state.tab5} onPress={() => this.toggleTab5()}>
            <Icon active={this.state.tab5} name="star" />
            <Text style={{fontSize: stringObj.char === "en" ? 8 : 9}}>{stringObj.footer.main.favorite}</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default MainFooter;
