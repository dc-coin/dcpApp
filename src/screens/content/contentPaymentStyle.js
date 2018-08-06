const React = require("react-native");
const { Dimensions, Platform } = React;
const { width, height } = Dimensions.get('window');

//Platform.

export default {
  container: {
    backgroundColor: "#FFF"
  },
  opacityBackground: {
    //opacity: 0.5,
    backgroundColor: '#757070',
  },

  panelView : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  descText: {    
    marginTop: 40,
    marginBottom: 20
  },

  circleView:{
    borderRadius: Math.round(width + height) / 2,
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor:'#7f7f7f',
    justifyContent: 'center',
    alignItems: 'center'
  },

  myPointText : { 
    marginBottom: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,    
    borderBottomColor: '#949494',
    borderBottomWidth: 2 
  },

  buttonView: {
    backgroundColor: "#FFF",
    marginHorizontal:30,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
  },

  buttonGroups: {
    height: 45,
    borderRadius: 0,
    flex: 1,
    justifyContent: 'center',
  },

  whiteText : {
    color : '#fff'
  }
  
};
