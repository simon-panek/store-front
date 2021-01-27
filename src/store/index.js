import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories-reducer.js';
import cart from './cart-reducer.js'

let reducers = combineReducers ({ categories, cart }); 

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();