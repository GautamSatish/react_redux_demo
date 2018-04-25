import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'grommet/scss/hpe/index.scss';

import todoApp from './reducers';
import App from './App';

// Create a store object and wrap the <App /> component within the Provider.
// Provider takes store as input.

{/* <Provider store={store}>
  <App />
</Provider> */}

const store = createStore(todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
