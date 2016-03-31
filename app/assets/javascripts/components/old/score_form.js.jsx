

var ScoreForm = React.createClass({

  getInitialState: function() {
    return {score: null}
  },

  _handleSubmit: function(event) {
    event.preventDefault();
    var score = this.state.score;
    var playerId = this.refs.playerSelector.state.value;
    var challengeId = this.refs.challengeSelector.state.value;
    var data = { score: {value: score, activity_id: challengeId, user_id: playerId} }

    $.ajax({
      url: '/scores',
      type: 'post',
      dataType: 'json',
      data: data,
      success: this.props.onSuccess,
      error: function(data) {
        console.error('there was a problem sending the score data to the server');
      }.bind(this)
    });
  },

  clearForm: function() {
    this.refs.challengeSelector.clear()
    this.refs.playerSelector.clear()
    this.setState({score: null})
  },

  _handleChange: function(event) {
    this.setState({score: event.target.value})
  },


  render: function() {
    return (
      <form className="ui form" onSubmit={this._handleSubmit}>
        <h2>add a score</h2>
        <div className="field">
          <ChallengeSelector ref="challengeSelector" />
        </div>

        <div className="field">
          <PlayerSelector ref="playerSelector" />
        </div>

        <div className="field">
          <div className="ui small action input">
            <input type="number" value={this.state.score} onChange={this._handleChange} placeholder="points" ref="scoreValue" />
            <button type="submit" className="ui small button">record</button>
          </div>
        </div>
      </form>
    )
  }
});

