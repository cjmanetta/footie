import { createStore, applyMiddleware } from 'redux';
import ScoresApp from './reducers/scores';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
  	ScoresApp, 
  	initialState,
  	applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  
  return store;
}

