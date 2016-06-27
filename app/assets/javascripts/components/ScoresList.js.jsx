import React from 'react';
import Score from './Score.js.jsx';

let nextSortedScoreId = 0;

const ScoresList = ({
	scores
}) => {

	if (scores.length === 0) {
		return <div>no scores yet</div>
	}

	return (
		<table className="ui unstackable striped table">
			<tbody>
				{scores.map(score => 
					<Score 
						key={nextSortedScoreId++}
						score={score}	
					/>
				)}
			</tbody>
		</table>
	);
};

export default ScoresList;
