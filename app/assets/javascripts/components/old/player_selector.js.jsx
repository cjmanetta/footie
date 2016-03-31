var PlayerSelector = React.createClass ({
  getInitialState: function() {
    return {
      players: [],
      value: null,
    };
  },

  clear: function() {
    this.setState({ value: null })
  },

  _handleChange: function(event) {
    this.setState({value: event.target.value});
  },

  componentDidMount: function() {
    $.ajax({
      url: '/users',
      type: 'get',
      dataType: 'json',
      success: function(players) {
        this.setState({players: players});
      }.bind(this),
      error: function(data) {
        console.log(data)
        console.error('there was a problem getting the players');
      }.bind(this)
    });
  },

  render: function() {
    var player_options = this.state.players.map(function (player) {
        return <option className="item" value={player.id} key={player.id}>{player.firstname}</option>
    })
    return(
      <select className="ui selection dropdown" ref="player" defaultValue="" onChange={this._handleChange}>
      <option className="default text" value="">select a player</option>
        {player_options}
      </select>
    );
  }

});
