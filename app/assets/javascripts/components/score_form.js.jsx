var ScoreForm = React.createClass({

  getInitialState: function () {
    return {
      challenge: null,
      player: null,
    };

  },

  handleScoreSubmit: function(event) {
    event.preventDefault();
    var score = this.refs.score.getDOMNode().value;
    var challenge = this.state.challenge;
    var player = this.state.player;

    var data = {score: {value: score, activity_id: challenge, user_id: player}}
    console.log("heres the stuff")
    console.log(data)
    $.ajax({
      url: '/scores',
      type: 'post',
      dataType: 'json',
      data: data,
      success: function(response) {
        console.log(response)
        console.log("success")

      }.bind(this),
      error: function(data) {
        console.log(data)
        console.error('there was a problem sending the score data to the server');
      }.bind(this)
    });
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

