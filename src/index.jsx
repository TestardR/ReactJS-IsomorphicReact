import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import getStore from './getStore';
import { Provider } from 'react-redux';

const store = getStore();

const render = App => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('AppContainer')
  );
};

render(App);
