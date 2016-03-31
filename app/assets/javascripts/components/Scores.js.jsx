import React from 'react';
import Scoreboard from './scoreboard.js.jsx';
import ScoreForm from './scoreform.js.jsx';

 
const Scores = () => (
	<div>
		<div className="scoreboard column">
			<Scoreboard />
		</div>
		<div className="new-score middle aligned column">
			<ScoreForm />
		</div>
	</div>
);

export default Scores;