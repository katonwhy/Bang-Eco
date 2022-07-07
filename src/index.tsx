import React from 'react';
import * as ReactDom from 'react-dom';
import './styles/main.css';
import App from './App';
import { Provider } from "react-redux";
import store from './store/store';

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)