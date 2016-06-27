import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../Store.js';
import Scores from './Scores.js.jsx';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  	<Scores />	
	</Provider>,
  document.querySelector('.scores')
);