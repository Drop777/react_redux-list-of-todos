import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import ConnectedApp from './Components/App/ConnectedApp';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>, document.getElementById('root')
);
