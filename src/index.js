import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './students'
import {Provider} from 'react-redux'
// import store from './combineReducers'

// console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
