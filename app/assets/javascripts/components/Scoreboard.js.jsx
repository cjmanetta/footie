import React from 'react';
import ScoresList from './scoreslist.js.jsx';
import { getSortedScores, fetchScores } from '../actions';

class Scoreboard extends React.Component {

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() =>
			this.forceUpdate()
		);
		store.dispatch(fetchScores());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { store } = this.context;
		const state = store.getState();
		const scores = state.scores;


		return (
			<div className="ui inverted segment">
				<img 
					src={gon.scoreboardHeader} 
					alt="scoreboard" 
					className="headline-image ui fluid image"
				/>
				<div className="container">
					<ScoresList scores={ scores } />
				</div>
			</div>
		)
	}
};

Scoreboard.contextTypes = {
	store: React.PropTypes.object
};


export default Scoreboard;