// _app.js
import App, { Container } from "next/app";

import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
//redux
import store from "../redux/store";

class MyApp extends App {
  render() {
    return (
      <Container>
        <Provider store={store}> </Provider>
      </Container>
    );
  }
}

export default withRedux(store)(MyApp);
