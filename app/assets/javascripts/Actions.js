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

export function postScore(score, { token }) {
	let newScore = JSON.stringify({value: score.value,
			activity_id: score.challenge,
			user_id: score.player
		})
	fetch('/scores', {
										method: 'post',
										headers: {
											'Content-Type': 'application/json',
											'Accept': 'application/json',
											'X-Requested-With': 'XMLHttpRequest',
											'X-CSRF-Token': token
										},
										body: newScore
						})
						.then(console.log("got in here"))
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
			score.value = parseInt(score.value) + parseInt(action.value)
		}
	})

	return currentScores.sort((a, b) => { return b.value - a.value;})
}

const getSortedScores = (data) => {

	let players = data.scores;
	let playersValues = [];
	let reducedScore
	let sortedScores = [];
	
	players.forEach((player, index, players) => {
		if(player.scores.length > 0) {
			player.scores.forEach((score, index, scores) => {
				playersValues.push(score.value)
				
			})
			reducedScore = playersValues.reduce((prev, curr) => prev + curr);
		} else {
			reducedScore = [0];
		}
		debugger
		sortedScores.push({player: player.name, value: reducedScore, photo: player.photo});
		playersValues = []
	});
	console.log(sortedScores)
	return sortedScores.sort((a, b) => { return b.value - a.value;});
	
};

export { getSortedScores } ;