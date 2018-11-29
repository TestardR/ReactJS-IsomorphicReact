import App from './App';
import ReactDOM from 'react-dom';
import React from 'react';
import getStore from './getStore';
import { Provider } from 'react-redux';

const store = getStore();

const fetchDataForLocation = () => {
  store.dispatch({ type: `REQUEST_FETCH_QUESTIONS` });
};

const render = App => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('AppContainer')
  );
};

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}

// render(App);
store.subscribe(() => {
  const state = store.getState();
  if (state.questions.length > 0) {
    console.info('Mounting app');
    render(App);
  } else {
    console.info('App not yet mounted');
  }
});
fetchDataForLocation();
