import React from 'react';
import { fetchChallenges } from '../actions';

class ChallengeSelector extends React.Component {

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
		store.dispatch(fetchChallenges());
	}
	
	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { store } = this.context;
		const state = store.getState();
			const challenges = state.challenges.map(challenge => {
			return (
				<option 
					className="item" 
					value={challenge.id} 
					key={challenge.id}>
				{challenge.title}
				</option>
			)
		});

		return (
			<select 
				className="ui selection dropdown"
				defaultValue=""
				onChange={(event) => {
					store.dispatch({
						type: 'SELECT_CHALLENGE',
						id: this.selection.value
					});
				}}
				ref={node => { this.selection = node;}}
				>
				<option 
					value="" ref={node => { this.defaultSelection = node;}}
					className="default text">
					select a challenge
					</option>
				{challenges}
			</select>
		)
	}
};

ChallengeSelector.contextTypes = {
	store: React.PropTypes.object
};

export default ChallengeSelector;