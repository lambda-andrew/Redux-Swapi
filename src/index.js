import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware} from 'redux';

// needed dependancies
// applyMiddleware from redux ok
// thunk from redux-thunk ok
// logger from redux-logger ok
// rootReducer from ./reducers ok

const store = createStore(
  rootReducer, applyMiddleware(thunk)
  /* applyMiddleware goes here */
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
