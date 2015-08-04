var Scoreboard = React.createClass({
  getInitialState: function() {
    return { scores: this.props.initialScores };
  },

  render: function() {

    var scores = this.state.scores.map(function(score) {
      return <Score key={score.id} score={score} />
    });


    return (
      <div className="scoreboard small-6 columns">
        <ul>
          <li>{scores}</li>
        </ul>
        <ScoreForm scores={scores}/>
      </div>
    );
  },
});


var ScoreForm = React.createClass({

  render: function() {
    return (
      null
    );
  }
});


React.render(
  <Scoreboard />,
  document.querySelector('.scores')
  )