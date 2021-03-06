import React from 'react';
import Scoreboard from './Scoreboard.js.jsx';
import ScoreForm from './ScoreForm.js.jsx';

 
const Scores = () => (
	<div className="ui two column stackable center aligned grid container">
		<div className="scoreboard column">
			<Scoreboard />
		</div>
		<div className="new-score middle aligned column">
			<ScoreForm />
		</div>
	</div>
);

export default Scores;