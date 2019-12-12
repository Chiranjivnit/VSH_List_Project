import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk'
import Reducer from '../src/app/reducer/reducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(Reducer, applyMiddleware(Thunk))


ReactDOM.render(<Provider store={store} >
    <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
