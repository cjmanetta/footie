import React from 'react';
import PlayerSelector from './playerselector.js.jsx';
import ChallengeSelector from './challengeselector.js.jsx';


let nextScoreId = 1;

class ScoreForm extends React.Component {

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		
		let input;
		let playerSelector;
		let challengeSelector;
		const { store } = this.context;
		const state = store.getState();

		const clearForm = () => {
			input.value = '';
			playerSelector.selection.value = playerSelector.defaultSelection.value;
			challengeSelector.selection.value = challengeSelector.defaultSelection.value;
		}

		return (
			<form 
				onSubmit={(event) => {
					event.preventDefault();
					store.dispatch({
								type: 'ADD_SCORE',
								id: nextScoreId++,
								value: input.value,
								player: state.selectorCache.player,
								challenge: state.selectorCache.challenge
							});
					clearForm();
				}}> 
				<PlayerSelector 
					ref={node => {playerSelector = node}} 
				/>
				<ChallengeSelector 
					ref={node => {challengeSelector = node}} 
				/>
				<input type="number" ref={node => {input = node;}}/>
				<button
					type="submit">
					record
				</button>
			</form>
		)
	}
};

ScoreForm.contextTypes = {
	store: React.PropTypes.object
};

export default ScoreForm;