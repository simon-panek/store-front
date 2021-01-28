import { createStore, combineReducers, applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import categories from './categories-reducer.js';
import cart from './cart-reducer.js';
import api from './api-reducer.js';

let reducers = combineReducers ({ categories, cart, api }); 

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();