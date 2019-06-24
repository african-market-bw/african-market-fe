import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createStore, applyMiddleware, compose,
} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import * as serviceWorker from './serviceWorker';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//   null,
//   composeEnhancers(applyMiddleware(thunk)),
// );

// const app = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
