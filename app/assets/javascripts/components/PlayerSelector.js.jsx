import React from 'react';
import { fetchPlayers } from '../actions';


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
			return <option value={player.id} key={player.id}>{player.firstname}</option>
		});

		return (
			<select 
				defaultValue=""
				onChange={(event) => {
					store.dispatch({
						type: 'SELECT_PLAYER',
						id: this.selection.value
					});
				}}
				ref={node => { this.selection = node;}}
				>
				<option value="" ref={node => { this.defaultSelection = node;}}>select a player</option>
				{players}
			</select>
		)
	}
};

PlayerSelector.contextTypes = {
	store: React.PropTypes.object
};

export default PlayerSelector;