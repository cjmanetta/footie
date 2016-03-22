import React from 'react';

const getFilteredScores = (scores, player, targetArray) => {
	targetArray = scores.filter((score) => {
		return score.player === player.id.toString()
	});
	return targetArray
};

const getFilteredScoreValues = (scores, targetArray) => {
	scores.forEach((score, index, scores) => {
		targetArray.push(parseInt(score.value))
	})
	return targetArray;
};

const reduceScores = (scores) => {
	if(scores.length > 0) {
		return scores.reduce((prev, curr) => prev + curr);
	} else {
		return [0];
	}
};

const getSortedScores = (state) => {
	
	let scores = state.scores;
	let players = state.players;
	let sortedScores = [];

	players.forEach((player, index, players) => {
		let filteredScores = [], filteredScoreValues = [], reducedScores = [];

		filteredScores = getFilteredScores(scores, player, filteredScores);
		filteredScoreValues = getFilteredScoreValues(filteredScores, filteredScoreValues);
		reducedScores = reduceScores(filteredScoreValues);

		sortedScores.push({player: player.name, value: reducedScores});
	});

	return sortedScores.sort((a, b) => { return b.value - a.value;});
	
};

export { getSortedScores } ;