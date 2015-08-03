var Score = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.score.firstname} : {this.props.score.score}
      </div>

    );
  }
});