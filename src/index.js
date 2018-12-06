import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import koalaSaga from './redux/koalaSaga'
import koalaListReducer from './redux/koalaListReducer';
import {createStore, applyMiddleware} from 'redux';
import { all } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const middlewareList = process.env.NODE_ENV === 'development' ?
  [sagaMiddleware, logger] :
  [sagaMiddleware];

const store = createStore(
    koalaListReducer,
    applyMiddleware(...middlewareList),
    
)

function* rootSaga() {
    yield all([
        koalaSaga(),
      
    ]);
    
}

sagaMiddleware.run(rootSaga)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
