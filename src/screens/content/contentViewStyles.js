const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

//Platform.

export default {
  container: {
    backgroundColor: "#FFF"
  },
  screenHeader : {
    height : 40,
    marginTop : 10
  },
  screenTitle : {
    marginTop : 10,
    marginLeft : 20
  },
  screenTitleRight : {
    marginTop: 5,    
    marginRight : 10,
    width:110
  },
};
