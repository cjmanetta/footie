import ScoresApp from './reducers/scores';
import { createStore } from 'redux';

export default function configureStore(initialState) {
  const store = createStore(ScoresApp, initialState,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  );
  return store;
}

