import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redex'
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)

ReactDOM.render
 <Provider store={store}>
  (<App />
 </Provider>, 
 document.getElementById('root')
);
registerServiceWorker();
