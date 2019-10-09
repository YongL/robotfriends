import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // provider handle passing all store data into all children/ connect will connect and subscribe
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import thunkMiddleware from 'react-thunk'; // react-thunk vs redux-thunk
import thunkMiddleware from 'redux-thunk'; // react-thunk vs redux-thunk
// import {createLogger} from 'redux-logger';
import {searchRobots, requestRobots} from './redux/reducers'


import App from './containers/App';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
import './index.css';

const rootReducer = combineReducers({requestRobots, searchRobots});

// const logger = createLogger();
// const store = createStore(searchRobots, applyMiddleware(logger)); // should be rootReducers (all reducers combine)
const store = 
    createStore(rootReducer, applyMiddleware(thunkMiddleware, /**logger*/)); // should be rootReducers (all reducers combine)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
