import 'tachyons';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './containers/App';
import { searchRobots } from './reducers';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(searchRobots)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
