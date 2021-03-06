import React from 'react';
import PlayerSelector from './PlayerSelector.js.jsx';
import ChallengeSelector from './ChallengeSelector.js.jsx';


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
		let token = state.token

		const clearForm = () => {
			input.value = '';
			playerSelector.selection.value = playerSelector.defaultSelection.value;
			challengeSelector.selection.value = challengeSelector.defaultSelection.value;
		}

		return (
			<form
				className="ui form"
				data-remote="true" 
				onSubmit={(event) => {
					event.preventDefault();
					store.dispatch({
								type: 'ADD_SCORE',
								value: input.value,
								player: state.selectorCache.player,
								challenge: state.selectorCache.challenge,
								token
							});
					clearForm();
				}}>
				<h2>ADD POINTS</h2>
				<p>Just choose a player and a challenge and enter points. You can even go negative if you are feeling ornery</p>
				<div className="field">
					<PlayerSelector 
						ref={node => {playerSelector = node}}
					/>
				</div>
				<div className="field">
					<ChallengeSelector 
						ref={node => {challengeSelector = node}}
					/>
				</div>
				<div className="field">
					<div className="ui small action input">
						<input 
							type="number" 
							ref={node => {input = node;}}
							placeholder="POINTS"
							required
						/>
						<button
							type="submit"
							className="ui small button"
						>
							record
						</button>
					</div>
				</div>
			</form>
		)
	}
};

ScoreForm.contextTypes = {
	store: React.PropTypes.object
};



<PlayerSelector 
						ref={node => {playerSelector = node}}
					/>

export default ScoreForm;