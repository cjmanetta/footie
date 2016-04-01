import { createStore, applyMiddleware, compose } from 'redux';
import ScoresApp from './reducers/scores';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(
  	ScoresApp, 
  	initialState,
  	compose(
			applyMiddleware(thunkMiddleware),
    	window.devToolsExtension ? window.devToolsExtension() : f => f
  	) 	
  );
  
  return store;
}

