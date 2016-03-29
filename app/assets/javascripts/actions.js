import React from 'react';
import fetch from 'isomorphic-fetch';

export function fetchChallenges() {
	
	return function(dispatch) {
		return fetch('/activities', {
										method: 'get',
										headers: {
											'Content-Type': 'json',
											'Accept': 'application/json'
						}})
						.then(response => response.json())
						.then(json => {
							dispatch(receiveChallenges(json));
						});
									
	};
};

export function receiveChallenges(challenges) {
	return {
		type: 'RECEIVE_CHALLENGES',
		payload: {
			challenges
		}
	};
}

export function fetchPlayers() {
	
	return function(dispatch) {
		return fetch('/users', {
										method: 'get',
										headers: {
											'Content-Type': 'json',
											'Accept': 'application/json'
						}})
						.then(response => response.json())
						.then(json => {
							dispatch(receivePlayers(json));
						});
									
	};
};

export function receivePlayers(players) {
	return {
		type: 'RECEIVE_PLAYERS',
		payload: {
			players
		}
	};
}

export function fetchScores() {
	
	return function(dispatch) {
		return fetch(`/users/${gon.user_id}.json`, {
										method: 'get',
										headers: {
											'Content-Type': 'json',
											'Accept': 'application/json',
											'X-Requested-With': 'XMLHttpRequest'
						}})
						.then(response => response.json())
						.then(json => {		
							let sortedScores = getSortedScores(json);	
							dispatch(receiveScores(sortedScores));
						});
									
	};
};

export function receiveScores(scores) {
	return {
		type: 'RECEIVE_SCORES',
		payload: {
			scores
		}
	};
}

export function addNewScore(state, action) {
	let currentScores = state.scores
	let name = state.players[action.player - 1].firstname
	
	currentScores.forEach (score => {
		if(score.player == name) {
			score.value += parseInt(action.value)
		}
	})

	return currentScores.sort((a, b) => { return b.value - a.value;})
}

// const getFilteredScores = (scores, player, targetArray) => {
// 	targetArray = scores.filter((score) => {
// 		return score.player === player.id.toString()
// 	});
// 	return targetArray
// };

// const getFilteredScoreValues = (scores, targetArray) => {
// 	scores.forEach((score, index, scores) => {
// 		targetArray.push(parseInt(score.value))
// 	})
// 	return targetArray;
// };

// const reduceScores = (scores) => {
// 	if(scores.length > 0) {
// 		return scores.reduce((prev, curr) => prev + curr);
// 	} else {
// 		return [0];
// 	}
// };


const getSortedScores = (data) => {
	let players = data.scores;
	console.log(players)
	let players_values = [];
	let reducedScore
	let sortedScores = [];
	
	players.forEach((player, index, players) => {
		if(player.scores.length > 0) {
			player.scores.forEach((score, index, scores) => {
				players_values.push(score.value)
				
			})
			reducedScore = players_values.reduce((prev, curr) => prev + curr);
		} else {
			return [0];
		}

		sortedScores.push({player: player.name, value: reducedScore});
	});

	return sortedScores.sort((a, b) => { return b.value - a.value;});
	
};



// const getSortedScores = (state) => {
	
// 	let scores = state.scores;
// 	let players = state.players;
// 	let sortedScores = [];
	
// 	players.forEach((player, index, players) => {
// 		let filteredScores = [], filteredScoreValues = [], reducedScores = [];

// 		filteredScores = getFilteredScores(scores, player, filteredScores);
// 		filteredScoreValues = getFilteredScoreValues(filteredScores, filteredScoreValues);
// 		reducedScores = reduceScores(filteredScoreValues);

// 		sortedScores.push({player: player.firstname, value: reducedScores});
// 	});

// 	return sortedScores.sort((a, b) => { return b.value - a.value;});
	
// };

export { getSortedScores } ;