const React = require("react-native");
const { Dimensions, Platform } = React;
const { width, height } = Dimensions.get('window');

//Platform.

export default {
  container: {
    backgroundColor: "#FFF"
  },
  descOverlay: {
    //flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: width
  },
  descOverlayText: {
    color: "#fff",
    marginHorizontal: 20,
    marginVertical: 10
  }

};
