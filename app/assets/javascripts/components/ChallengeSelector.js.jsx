import React from 'react';

class ChallengeSelector extends React.Component {

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { store } = this.context;
		const state = store.getState();

		const challenges = state.challenges.map(challenge => {
			return <option value={challenge.id} key={challenge.id}>{challenge.title}</option>
		});

		return (
			<select 
				defaultValue=""
				onChange={(event) => {
					store.dispatch({
						type: 'SELECT_CHALLENGE',
						id: this.selection.value
					});
				}}
				ref={node => { this.selection = node;}}
				>
				<option value="" ref={node => { this.defaultSelection = node;}}>select a challenge</option>
				{challenges}
			</select>
		)
	}
};

ChallengeSelector.contextTypes = {
	store: React.PropTypes.object
};

export default ChallengeSelector;