

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
      <form onSubmit={this._handleSubmit}>
        <div className="row">
          <div className= "small-9 small-centered columns">
            <h2>add a score</h2>
            <ChallengeSelector ref="challengeSelector" />
          </div>
        </div>

        <div className="row">
          <div className= "small-9 small-centered columns">
            <PlayerSelector ref="playerSelector" />
          </div>
        </div>

        <div className="row">
          <div className="small-9 small-centered columns">
            <div className="row collapse postfix-radius">
              <div className="medium-9 small-12 columns">
                <input type="number" value={this.state.score} onChange={this._handleChange} placeholder="points" ref="scoreValue" />
              </div>
              <div className="medium-3 small-12 columns">
                <input type="submit" className="button tiny postfix radius" />
              </div>
            </div>
          </div>
        </div>
      </form>

    )
  }
});

