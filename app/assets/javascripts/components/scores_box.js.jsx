var ScoresBox = React.createClass({
  getInitialState: function() {
    return { scores: [],
            challenge: null,
            player: null,
          };
  },

  componentDidMount: function () {
    this.loadScoresFromServer();
  },

  loadScoresFromServer: function() {
    var path = '/users/' + gon.user_id;
    $.ajax({
      url: path,
      type: 'get',
      dataType: 'json',
      success: this.onSuccess,
      error: function(data) {
        console.log(data)
        console.error('there was a problem getting the scores');
      }.bind(this)
    });
  },

  onSuccess: function(response) {
    this.setState({scores: response.scores});
    this.refs.scoreForm.clearForm();
  },


  render: function() {
    return (
      <div>
        <div className="scoreboard medium-6  small-12 columns">
          <Scoreboard scores={this.state.scores} />
        </div>
        <div className="new-score medium-6 small-12 columns">
          <ScoreForm ref="scoreForm" onScoreSubmit={this.handleScoreSubmit} onSuccess={this.onSuccess} />
        </div>
      </div>
    )
  }
});

