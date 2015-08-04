var PlayerSelector = React.createClass ({

  getInitialState: function() {
    return {
      players: []
    };
  },

  passInfo: function() {
    var player = React.findDOMNode(this.refs.player).value;
    this.props.input(player)
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
        return <option value={player.id}>{player.firstname}</option>
    })
    return(
      <select ref="player" onChange={this.passInfo}>
        {player_options}
      </select>
    );
  }

});