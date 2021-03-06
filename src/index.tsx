import 'tachyons';
import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import App from './containers/App';
import { createLogger } from "redux-logger";
import thunkMiddleware from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
