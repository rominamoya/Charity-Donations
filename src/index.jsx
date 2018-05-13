import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CharityContainer from './CharityContainer';
import store from './store';

const App = () => (
  <CharityContainer />
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
