

import {render}  from 'react-dom';
import React from 'react';
import App from './containers/App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

//import store from './store';
import ReduxPromise from 'redux-promise';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>,
    window.document.getElementById('root'))