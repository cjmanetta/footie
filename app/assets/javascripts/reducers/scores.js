import { combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';

//TODO: remove when hooked up to server
const constructPlayers = () => {
	return [
			{id: 1, name: "Carli Lloyd"},
			{id: 2, name: "Becky Sauerbrunn"},
			{id: 3, name: "Hope Solo"}
		];
};



//TODO: remove when hooked up to server
const constructChallenges = (state) => {
	let challenges = [];
	// $.get('/activities', (response) => {challenges.push(...reponse)})
	 $.ajax({
		url: '/activities',
		type: 'get',
		dataType: 'json',
		success: (response) => {
			challenges.push(...response)
			console.log('i am a full array but i get called on line 25',challenges)
			return challenges
		},
		error: (data) => {
			console.log(data)
			console.error("there was a problem getting the challenges");
		}
	})
	console.log('i am an empty array but i get called on line 33', challenges)
	// return [
	// 		{id: 1, title: "Ronaldo Chop"},
	// 		{id: 2, title: "Juggling"},
	// 		{id: 3, title: "Maradona"}
	// 	];
};

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


const constructScores = (state, action) => {
	switch(action.type) {
		case 'ADD_SCORE':
			return [
					...state.scores,
					score(undefined, action)
			];
		default:
			return state;
	}
};

// TODO: this initial state should be loaded from the server
const initialState = {
	scores: [],
	players: constructPlayers(),
	challenges: constructChallenges(),
	selectorCache: {
		player: null, 
		challenge: null
	}
};

const scoresApp = (state =	initialState, action) => {
	switch(action.type) {
		case 'SELECT_PLAYER':
			return {
				...state,
				selectorCache: {
					...state.selectorCache,
					player: action.id
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
			return {
				...state,
				scores: constructScores(state, action),
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