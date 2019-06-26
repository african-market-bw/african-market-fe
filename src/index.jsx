import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import userReducer from './store/reducers/usersReducer';
import productReducer from './store/reducers/product';
import * as serviceWorker from './serviceWorker';
import customMiddleware from './token';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    user: userReducer,
    product: productReducer,
  }),
  composeEnhancers(applyMiddleware(thunk, customMiddleware)),
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
