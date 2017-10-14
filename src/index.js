import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'
import App from './components/App/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const rootEl = document.getElementById('root');
const store  = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

registerServiceWorker();






