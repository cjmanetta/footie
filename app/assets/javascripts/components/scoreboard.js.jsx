var Scoreboard = React.createClass({

  render: function() {
    this.props.scores.sort(function(a, b) {
      return b.score - a.score;
    });

    var scores = this.props.scores.map(function(score) {
      return <Score key={score.id} score={score} />
    });

    return (
      <div className="panel small-12 small-centered columns text-center">
        <h2>scoreboard</h2>
        {scores}
      </div>
    );
  }
});
