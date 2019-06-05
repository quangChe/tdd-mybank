import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import rootReducer from './reducers/my-balance';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);
const MY_BANK_APP = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(MY_BANK_APP, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
