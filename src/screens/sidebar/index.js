import React, { Component } from "react";
import { Image, View } from "react-native";
import stringObj from "../../18n/";
import {
  Container, Content,
  List, ListItem, Button,
  Icon, Text,
  Left, Right
} from "native-base";
import styles from "./style";

const datas = [
  {
    name: "홈",
    route: "Home",
    icon: "home",
    bg: "#C5F442"
  },
  {
    name: "로그인",
    route: "Login",
    icon: "log-in",
    bg: "#C5F442"
  },
  {
    name: "회원가입",
    route: "Join",
    icon: "checkbox",
    bg: "#C5F442"
  },
  {
    name: "코인교환",
    route: "Exchange",
    icon: "code-working",
    bg: "#C5F442"
  },
  {
    name: "콘텐츠상세",
    route: "ContentDetail",
    icon: "document",
    bg: "#C5F442"
  },
  {
    name: "콘텐츠뷰어",
    route: "ContentView",
    icon: "document",
    bg: "#C5F442"
  },
  {
    name: stringObj.sidebar.menu_0100,
    route: "PurchaseList",
    icon: "filing",
    bg: "#C5F442"
  },
  {
    name: "콘텐츠판매내역",
    route: "SalesList",
    icon: "document",
    bg: "#C5F442"
  },
  {
    name: stringObj.sidebar.menu_0200,
    route: "PurchaseList",
    icon: "filing",
    bg: "#C5F442"
  },
  {
    name: stringObj.sidebar.menu_0300,
    route: "PurchaseList",
    icon: "filing",
    bg: "#C5F442"
  },
  {
    name: stringObj.sidebar.menu_0400,
    route: "PurchaseList",
    icon: "filing",
    bg: "#C5F442"
  },
  {
    name: stringObj.sidebar.menu_0500,
    route: "withdrawMemberShip",
    icon: "filing",
    bg: "#C5F442"
  },
  {
    name: stringObj.sidebar.menu_0600,
    route: "Setting",
    icon: "settings",
    bg: "#C5F442"
  },
  {
    name: stringObj.sidebar.menu_0700,
    route: "Favorite",
    icon: "star",
    bg: "#C5F442"
  },

];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: 2,

      shadowOffsetWidth: 1,
      shadowRadius: 4
    };

    this._randerAllMenu = this._randerAllMenu.bind(this);
    this._randerMyMenu = this._randerMyMenu.bind(this);
  }

  _randerAllMenu() {
    return (
      <List style={{ height: this.state.tabIndex === 2 ? 0 : undefined }}>
        <ListItem itemDivider style={styles.allMenuDivider}>
          <Text style={styles.allMenuDividerText}>최근 감상 작품</Text>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton]}
          ><Text style={styles.allMenuButtonText}>최근 본 작품</Text></Button>
        </ListItem>

        <ListItem itemDivider style={styles.allMenuDivider}>
          <Text style={styles.allMenuDividerText}>베스트</Text>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton, styles.allMenuButtonLeft]}>
            <Text style={styles.allMenuButtonText}>골든 베스트</Text></Button>
          <Button style={[styles.allMenuButton, styles.allMenuButtonRight]}>
            <Text style={styles.allMenuButtonText}>선호작 베스트</Text></Button>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton, styles.allMenuButtonLeft, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}>투데이 베스트</Text></Button>
          <Button style={[styles.allMenuButton, styles.allMenuButtonRight, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}>카테고리별 베스트</Text></Button>
        </ListItem>

        <ListItem itemDivider style={styles.allMenuDivider}>
          <Text style={styles.allMenuDividerText}>유료</Text>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton, styles.allMenuButtonLeft, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}>연재 작품</Text></Button>
          <Button style={[styles.allMenuButton, styles.allMenuButtonRight, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}>완결 작품</Text></Button>
        </ListItem>

        <ListItem itemDivider style={styles.allMenuDivider}>
          <Text style={styles.allMenuDividerText}>무료</Text>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton, styles.allMenuButtonLeft, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}>연재 작품</Text></Button>
          <Button style={[styles.allMenuButton, styles.allMenuButtonRight, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}>완결 작품</Text></Button>
        </ListItem>

        <ListItem itemDivider style={styles.allMenuDivider}>
          <Text style={styles.allMenuDividerText}>독자마당</Text>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton, styles.allMenuButtonLeft]}>
            <Text style={styles.allMenuButtonText}>추천하기</Text></Button>
          <Button style={[styles.allMenuButton, styles.allMenuButtonRight]}>
            <Text style={styles.allMenuButtonText}>감상문</Text></Button>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton, styles.allMenuButtonLeft]}>
            <Text style={styles.allMenuButtonText}>자료실</Text></Button>
          <Button style={[styles.allMenuButton, styles.allMenuButtonRight]}>
            <Text style={styles.allMenuButtonText}>질문/답변</Text></Button>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton, styles.allMenuButtonLeft, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}>자유홍보</Text></Button>
          <Button style={[styles.allMenuButton, styles.allMenuButtonRight, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}></Text></Button>
        </ListItem>

        <ListItem itemDivider style={styles.allMenuDivider}>
          <Text style={styles.allMenuDividerText}>고객지원</Text>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton, styles.allMenuButtonLeft]}>
            <Text style={styles.allMenuButtonText}>공지사항</Text></Button>
          <Button style={[styles.allMenuButton, styles.allMenuButtonRight]}>
            <Text style={styles.allMenuButtonText}>불펌신고</Text></Button>
        </ListItem>
        <ListItem noBorder style={styles.allMenuButtonListItem}>
          <Button style={[styles.allMenuButton, styles.allMenuButtonLeft, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}>FAQ</Text></Button>
          <Button style={[styles.allMenuButton, styles.allMenuButtonRight, styles.allMenuButtonLast]}>
            <Text style={styles.allMenuButtonText}>연재신청</Text></Button>
        </ListItem>

      </List>
    );
  }

  _randerMyMenu() {
    return (
      <View style={[styles.myMenuView, {height: this.state.tabIndex === 1 ? 0 : undefined}]}>
        <View style={styles.userView}>
          <View style={styles.userIds}>
            <Text style={[styles.userNicknameText]}>닉네임</Text>
            <Text style={[styles.userIdText]}>ID</Text>
          </View>
          <View style={styles.userButtons}>
            <Button style={styles.btnWallet}>
              <Text>  지갑  </Text></Button>
            <Button light style={styles.btnLogout}>
              <Text style={styles.blueText}>로그아웃</Text></Button>
          </View>
        </View>
        <View style={styles.descCoinView}>
          <View style={styles.descCoin}>
            <Text style={[styles.descCoinText, styles.blueText]}>총 코인</Text>
            <Text style={[styles.descCoinText]}>구매한 코인</Text>
            <Text style={[styles.descCoinText, styles.blueText]}>판매한 코인</Text>
          </View>
          <View style={styles.descCoin}>
            <Text style={[styles.descCoinText, styles.blueText]}>10,700 DP</Text>
            <Text style={[styles.descCoinText]}>10,000 DP</Text>
            <Text style={[styles.descCoinText, styles.blueText]}>700 DP</Text>
          </View>
        </View>

        <List
          dataArray={datas}
          renderRow={data =>
            <ListItem button noBorder
              onPress={() => this.props.navigation.navigate(data.route)}
              style={styles.myMenuButtonListItem}
            >
              <Left>
                <Text style={[styles.myMenuButtonText]}>{data.name}</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" style={[styles.whiteText]} />
              </Right>
            </ListItem>}
        />
      </View>);
  }

  render() {
    return (
      <Container>
        <View style={{
          width: "100%", flexDirection: "row", justifyContent: "center", backgroundColor: '#595959',
        }}>
          <Button
            rounded={false}
            style={[styles.topButton,
            this.state.tabIndex === 1 ? styles.topButtonActive : styles.topButtonInActive]}
            onPress={() => { this.setState({ tabIndex: 1 }) }}

          ><Text style={{ fontSize: 16 }}>전체메뉴</Text></Button>
          <Button
            rounded={false}
            style={[styles.topButton,
            this.state.tabIndex === 2 ? styles.topButtonActive : styles.topButtonInActive]}
            onPress={() => { this.setState({ tabIndex: 2 }) }}
          ><Text style={{ fontSize: 16 }}>내정보</Text></Button>
        </View>

        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#595959", top: 0 }}
        >
          {this._randerAllMenu()}
          {this._randerMyMenu()}

        </Content>
      </Container>
    );
  }
}

export default SideBar;
