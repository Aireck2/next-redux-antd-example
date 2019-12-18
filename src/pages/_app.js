// _app.js
import React from "react";

import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
//redux
import store from "../redux/store";

class MyApp extends App {
  render() {
    return (
      <Container>
        <Provider store={store}>
          <Component />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(store)(MyApp);
