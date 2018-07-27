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
  musicInfoItemIcon: {
    marginTop:3,
    marginRight: 5,
    color: "#777",
    fontSize: Platform.noteFontSize +1
  },
  musicInfoItemText : {
    marginRight: 10,
    color: "#777"
  }
};
