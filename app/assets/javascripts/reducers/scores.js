import { combineReducers } from 'redux';
import { addNewScore, postScore } from '../actions';
import ReduxThunk from 'redux-thunk';

const score = (state, action) => {
	switch (action.type) {
		case 'ADD_SCORE':
			return {
				id: action.id,
				value: action.value,
				player: action.player,
				challenge: action.challenge
			};
		default:
			return state;
	}
};

// const getToken = (state) => {

// 	document.querySelector("meta[name='csrf-token']").content
// }
// const constructScores = (state, action) => {
// 	switch(action.type) {
// 		case 'ADD_SCORE':
// 			return {
// 				...state,
// 				scores: addNewScore(state, action);

// 			}
// 		default:
// 			return state;
// 	}
// };

// TODO: this initial state should be loaded from the server
const initialState = {
	scores: [],
	players: [],
	challenges: [],
	selectorCache: {
		player: null, 
		challenge: null
	}
};

const scoresApp = (state =	initialState, action) => {
	switch(action.type) {
		case 'RECEIVE_CHALLENGES':
			return Object.assign({}, state, { challenges: action.payload.challenges });
		case 'RECEIVE_PLAYERS':
			return Object.assign({}, state, { players: action.payload.players });
		case 'RECEIVE_SCORES':
			return Object.assign({}, state, { scores: action.payload.scores });
		case 'SELECT_PLAYER':
			return {
				...state,
				selectorCache: {
					...state.selectorCache,
					player: action.id,
					firstname: action.firstname
				}
			};
		case 'SELECT_CHALLENGE':
			return {
				...state,
				selectorCache: {
					...state.selectorCache,
					challenge: action.id
				}
			};
		case 'ADD_SCORE':
			postScore(action, state)
			return {
				...state,
				scores: addNewScore(state, action),
				selectorCache: {
					player: null, 
					challenge: null
				}
			};
		default:
			return state;
	}
};

export default scoresApp;
