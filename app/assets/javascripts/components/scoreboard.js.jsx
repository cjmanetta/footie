var Scoreboard = React.createClass({

  render: function() {
    var scores = this.props.scores.map(function(score) {
      return <Score key={score.id} score={score} />
    });


    return (
      <div>
        <h2>scoreboard</h2>
        <ul>
          <li>{scores}</li>
        </ul>
      </div>
    );
  }
});
