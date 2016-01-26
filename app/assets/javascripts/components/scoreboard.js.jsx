var Scoreboard = React.createClass({

  render: function() {
    this.props.scores.sort(function(a, b) {
      return b.score - a.score;
    });

    var scores = this.props.scores.map(function(score) {
      return <Score key={score.id} score={score} />
    });

    return (
      <div className="ui inverted segment">
        <img className="headline-image ui fluid image" src={"/assets/scoreboard.png"} />
        <div className="container">
        <table  className="ui unstackable striped table">
          {scores}
        </table>
        </div>
      </div>
    );
  }
});
