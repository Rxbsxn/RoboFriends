import 'tachyons';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import { createLogger } from "redux-logger";
import { searchRobots } from './reducers';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
