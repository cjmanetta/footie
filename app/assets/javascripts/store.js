import ScoresApp from './reducers/scores';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import React from 'react';

export default function configureStore(initialState) {
  const store = createStore(
  	ScoresApp, 
  	initialState,
  	applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

