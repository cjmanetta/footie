var ScoreForm = React.createClass({

  getInitialState: function () {
    return {
      challenge: null,
      player: null,
    }
  },

  handleScoreSubmit: function(score) {
    var score = this.refs.score.getDOMNode().value;
    var challenge = this.state.challenge;
    var player = this.state.player;
    console.log(challenge)
  },

  handleChallenge: function(challenge) {
    console.log('at handleChallenge')
    console.log(challenge)
    this.setState({
      challenge: challenge,
    })
  },

  handlePlayer: function(player) {
    console.log('at handlePlayer')
    console.log(player)
    this.setState({
      player: player,
    })
  },


  render: function() {
    return (
      <form onSubmit={this.handleScoreSubmit}>
        <div className="row">
          <h2>add a score</h2>
          <ChallengeSelector input={this.handleChallenge} />
        </div>
        <div className="row">
          <PlayerSelector input={this.handlePlayer} ref="player" />
        </div>
        <div className="row collapse postfix-radius">
          <div className="medium-9 small-12 columns">
            <input type="number" placeholder="points" ref="score"/>
          </div>
          <div className="medium-3 small-12 columns">
            <input type="submit" className="button postfix" />
          </div>
        </div>
      </form>
    )
  }
});

React.render(
  <ScoreForm  />,
  document.querySelector('.new-score')
  )