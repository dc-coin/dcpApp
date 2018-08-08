const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },  

  whiteText : { color: 'white' },
  blueText : {color:'#1e4e79'},

  topButton : {
    height: 46,
    borderRadius: 0,
    flex: 1,
    justifyContent: 'center'
  },

  topButtonActive : {
    backgroundColor : '#a4a4a4'
  },

  topButtonInActive : {
    backgroundColor : '#808080'
  },

  allMenuDivider : { 
    backgroundColor: '#595959',
    height: 24 
  },

  allMenuDividerText : { 
    color: 'white',
    fontSize : 14,    
  },

  allMenuButtonListItem : {
    backgroundColor: '#6d6d6d',
    marginLeft: 0, marginRight: 0,
    paddingRight: 0, paddingTop: 0, paddingBottom: 0,
    justifyContent: 'center'
  },

  allMenuButtonText : { 
    color: 'white',
    fontSize : 12,    
  },

  allMenuButton : {
    height: 38,
    borderRadius: 0,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#7f7f7f',
  },

  allMenuButtonLeft : {
    marginRight: 1, marginBottom: 1,
  },

  allMenuButtonRight : {
    marginBottom: 1,
  },

  allMenuButtonLast : {
    marginBottom: 0,
  },

  myMenuView:{
    width: "100%", justifyContent: "center", backgroundColor: '#595959',
  },

  userView:{
    width: "100%", justifyContent: "center", flexDirection: "row", paddingVertical:10,
  },

  userIds:{
    flex: 1, justifyContent: "center", alignItems: 'center'
  },

  userNicknameText : {
    color: 'white',
    fontSize : 18
  },

  userIdText : {
    color: 'white',
    fontSize : 12,    
  },

  btnWallet : { height: 30, marginHorizontal: 2 },

  btnLogout : { height: 30, marginHorizontal: 2 },

  userButtons:{
    flex: 1, justifyContent: "center", flexDirection: "row", alignItems: 'center'
  },


  descCoinView : {
    width: "100%", justifyContent: "center", flexDirection: "row",
    paddingVertical:10,
    backgroundColor: '#7f7f7f', borderBottomColor : '#434343',
    borderBottomWidth : 1
  },

  descCoin : { flex: 1, justifyContent: "center", paddingLeft:20 },

  descCoinText : { 
    color: 'white',
    fontSize : 12, 
    marginBottom:5   
  },

  myMenuButtonListItem : {
    marginLeft: 0,
    paddingLeft: 10,
    backgroundColor: '#595959',
    borderBottomColor : '#434343',
    borderBottomWidth : 1
  },

  myMenuButtonText : { 
    color: 'white',
    fontSize : 12,    
  },
};
