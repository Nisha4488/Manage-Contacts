import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import { Provider } from 'react-redux'

let newStore = store();

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
