var Score = React.createClass({
  render: function() {
    return (
      <div className="score-container">
        <p><span className="score-name">{this.props.score.firstname}</span>        <span className="score-value">{this.props.score.score}</span></p>
      </div>

    );
  }
});