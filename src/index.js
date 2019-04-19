import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import {searchRobots, requestRobots } from './reducers';
import "tachyons"; 
import * as serviceWorker from './serviceWorker';

/*import {robots} from './robots.js'*/

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, requestRobots})
export const store = createStore(searchRobots, applyMiddleware(thunkMiddleware, logger));

serviceWorker.unregister();

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, 
	document.getElementById('root'));


	