const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

//Platform.

export default {
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  },
  marginLR20: {
    marginLeft : 20,
    marginRight : 20
  },
  marginL10: {
    marginLeft : 10
  },
  marginL20: {
    marginLeft : 20
  },

  bt10: {
    marginTop: 10
  },
  m10: {
    margin: 10
  },
  screenHeader : {
    height : 40,
    marginTop : 10
  },
  screenTitle : {
    marginTop : 10,
    marginLeft : 20
  },
  screenTitleLink : {
    marginTop: 5,
    marginRight : 20
  },

  contentSearchBar : {
    height: 50,
    marginBottom : 0
  },

  contentSearchBarInput : {
    borderColor: '#b29c54',
    borderWidth:2,
    height:40,
    backgroundColor:'#fff2cc'
  },

  contentSearchBarButton : {
    height: 40,
    paddingHorizontal : 5
  },

  resultListView : {
    borderTopColor: "#7f7f7f",
    borderTopWidth: 1
  },

  resultListItem : {
    marginLeft : 0,
    marginTop : 0,
    marginBottom : 0,
    marginRight : 0,
    paddingTop:10,
    paddingBottom:10
  },

  resultCol1 : {
    marginLeft : 10,
    alignSelf: 'center'
  },
  resultCol2 : {
    width: 70,
    alignSelf: 'center'
  },
  resultCol3 : {
    width: 70,
    alignItems: 'flex-end',
    flexDirection: 'row-reverse',
    alignSelf: 'center'
  },
  dpAmount : {
    textAlign: "center",
    fontSize:13
  }

};
