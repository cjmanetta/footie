var Scoreboard = React.createClass({

  render: function() {
    return (
      <div className="scoreboard small-6 columns">
        {this.props.initialScores}
      </div>
    );
  }
});





React.render(
  <Scoreboard />,
  $('.scores')
  )