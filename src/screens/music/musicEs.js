import React, { Component } from "react";
import { Keyboard } from 'react-native';
import {
  Container,
  Header,
  Button,
  Icon,
  Item,
  Input,
  Content,
  Text,
  Spinner
} from "native-base";
import MusicCard from "./musicCard";

import styles from "./styles";

import { connect } from 'react-redux';
import { musicSearchRequest } from '../../actions/music';


class MusicSearchES extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      keyword: "아이유",
      filter: []
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    this.setState({ isLoading: true });
    Keyboard.dismiss();

    var searchOption = {
      filter001: true,
      filter002: true,
      filter004: false,
      filter008: false,
      filter016: false,
      filter256: false,
      keyword: this.state.keyword
    };
    console.log(searchOption);

    this.props.musicSearchRequest(searchOption).then(
      () => {
        // if (this.props.postStatus.status === "SUCCESS") {
        //     // TRIGGER LOAD NEW MEMO
        //     // TO BE IMPLEMENTED
        //     Materialize.toast('Success!', 2000);
        // } else {
        //     /*
        //         ERROR CODES
        //             1: NOT LOGGED IN
        //             2: EMPTY CONTENTS
        //     */
        //     let $toastContent;
        //     switch (this.props.postStatus.error) {
        //         case 1:
        //             // IF NOT LOGGED IN, NOTIFY AND REFRESH AFTER
        //             $toastContent = $('<span style="color: #FFB4BA">You are not logged in</span>');
        //             Materialize.toast($toastContent, 2000);
        //             setTimeout(() => { location.reload(false); }, 2000);
        //             break;
        //         case 2:
        //             $toastContent = $('<span style="color: #FFB4BA">Please write something</span>');
        //             Materialize.toast($toastContent, 2000);
        //             break;
        //         default:
        //             $toastContent = $('<span style="color: #FFB4BA">Something Broke</span>');
        //             Materialize.toast($toastContent, 2000);
        //             break;
        //     }
        // }
        console.log(this.props.musicData);
        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const mapToComponents = (data) => {
      return data.map((music, i) => {
        return (
          <MusicCard
            data={music}
            key={music._id}
          />);
      });
    };

    return (
      <Container style={styles.container}>
        <Header searchBar rounded>
          <Item>
            <Icon active name="musical-notes" />
            <Input
              placeholder="Search"
              value={this.state.keyword}
              onChangeText={(keyword) => this.setState({ keyword })}
              onSubmitEditing={Keyboard.dismiss}
            />
            <Button onPress={this.handleSearch} transparent>
              <Icon active name="search" />
            </Button>
          </Item>

        </Header>

        <Content padder>
          {this.state.isLoading ? <Spinner /> : null}
          {this.props.musicData.hits ? mapToComponents(this.props.musicData.hits.hits) : null}

          <Button
            block
            onPress={() => this.props.navigation.openDrawer()}
          >
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    musicData: state.music.search.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    musicSearchRequest: (searchOption) => {
      return dispatch(musicSearchRequest(searchOption));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicSearchES);
