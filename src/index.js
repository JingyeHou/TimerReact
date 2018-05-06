// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import rootReducer from './reducers'
import './index.scss'


const store = createStore(rootReducer)
console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
