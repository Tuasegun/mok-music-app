import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import reducers from "./reducers/reducer"
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
 composeWithDevTools()

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

