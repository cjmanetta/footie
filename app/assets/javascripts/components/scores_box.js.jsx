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
      <article className="ui two column stackable center aligned grid container">
        <div className="scoreboard column">
          <Scoreboard scores={this.state.scores} />
        </div>
        <div className="new-score middle aligned column">
          <ScoreForm ref="scoreForm" onScoreSubmit={this.handleScoreSubmit} onSuccess={this.onSuccess} />
        </div>
      </article>
    )
  }
});

