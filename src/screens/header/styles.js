const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;

//Platform.

const defaultFontSize = 20;
const defaultIconSize = 23;

export default {
  dh_header : {        
  },

  dh_text : {
    fontSize : defaultFontSize,    
  },

  dh_icon : {
    fontSize : defaultIconSize
  },

  ch_header : {
    backgroundColor:'#fff',
    //height:40
  },

  ch_title : {
    fontSize : defaultFontSize-4,
    color:'#7f7f7f'
  },
  ch_subTitle : {
    fontSize : defaultFontSize-8,
    color:'#7f7f7f'
  },

  ch_icon : {
    fontSize : defaultIconSize,
    color:'#7f7f7f'
  },
};
