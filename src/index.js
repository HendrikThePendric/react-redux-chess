import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import getInitialState from './reducers/initialState.js';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootEl = document.getElementById('root');
const store  = createStore(
  rootReducer,
  getInitialState(),
  applyMiddleware(ReduxThunk)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

registerServiceWorker();






