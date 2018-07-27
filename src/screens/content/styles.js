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
    height: 60,
    borderBottomColor: "#7f7f7f",
    borderBottomWidth: 1,
    marginBottom : 5 
  },

  contentSearchBarInput : {
    borderColor: '#b29c54',
    borderWidth:2,
    backgroundColor:'#fff2cc'
  },

  contentSearchBarButton : {
    height: 50
  },

  resultListItem : {
    marginLeft : 0,
    marginTop : 0,
    marginBottom : 0,
    marginRight : 0,
    padding:0
  },

  resultCol : {
    height : 45,
    //backgroundColor:'#fff2cc',
    justifyContent: 'center'    
  }
};
