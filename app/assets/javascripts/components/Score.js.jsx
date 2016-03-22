import React from 'react';

const Score = ({
	score
}) => (
	<li> {score.player} | {score.value} </li>
);

export default Score;