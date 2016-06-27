import React from 'react';
import { fetchPlayers } from '../Actions.js';


class PlayerSelector extends React.Component {

	componentDidMount() {
		const { store } = this.context;
		this.unsubscribe = store.subscribe(() => this.forceUpdate());
		store.dispatch(fetchPlayers());
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {

		const { store } = this.context;
		const state = store.getState();

		const players = state.players.map(player => {
			return (
				<option 
					value={player.id} 
					key={player.id}
					className="item">
					{player.firstname}
					</option>
			)
		});

		return (
			<select
				className="ui selection dropdown"
				defaultValue=""
				onChange={(event) => {
					store.dispatch({
						type: 'SELECT_PLAYER',
						id: this.selection.value
					});
				}}
				ref={node => { this.selection = node;}}
				required
				>
				<option 
					value="" 
					ref={node => { this.defaultSelection = node;}}
					className="default text">
					SELECT A PLAYER
				</option>
				{players}
			</select>
		)
	}
};

PlayerSelector.contextTypes = {
	store: React.PropTypes.object
};

export default PlayerSelector;