import React, { Component } from 'react'

import {
  View,
  WebView,
  StyleSheet,
  Button
}
  from 'react-native';

var WEBVIEW_REF = 'webview';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.onWebViewMessage = this.onWebViewMessage.bind(this);
    this.onShare = this.onShare.bind(this);
  }

  onWebViewMessage(event) {
    console.log('event');
    console.warn("w:"+event.nativeEvent.data);
    let msg;
    try {
      msg = JSON.parse(event.nativeEvent.data);
    } catch (err) {
      console.warn(err);
      return;
    }
    console.log("a:"+msg);
  }

  onShare() {
    var fetchAbstractJS = "(" + this.fetchAbstract.toString() + "());";
    console.log(fetchAbstractJS);
    this.refs[WEBVIEW_REF].injectJavaScript(fetchAbstractJS);
  }

  // function called in WebView via injectJavaScript
  fetchAbstract() {
    try {
      console.log('ab');
      // post Message to react-native JS
      window.postMessage(JSON.stringify({ 'id': 'ABSTRACT_FETCHED'}), "*");
      
      document.querySelector('#myContent').style.backgroundColor = 'red';
    } catch (err) {
      console.warn(err);
      return;
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <WebView
          ref={WEBVIEW_REF}
          onMessage={this.onWebViewMessage}
          source={require("./test.html")}
        />
        <Button
          onPress={this.onShare}
          title="Share"
          color="#841584"
          accessibilityLabel="Social Share"
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    backgroundColor: '#4F6D7A',
  }
})
