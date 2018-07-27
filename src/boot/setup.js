import React, { Component } from "react";
import { StyleProvider } from "native-base";

import App from "../App";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers/';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));

export default class Setup extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(variables)}>
          <App />
        </StyleProvider>
      </Provider>
    );
  }
}
