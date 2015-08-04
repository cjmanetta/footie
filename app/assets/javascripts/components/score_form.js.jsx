var ScoreForm = React.createClass({
  render: function() {
    return (
      <div className="row">
        <ChallengeSelector />
        <PlayerSelector />
      </div>
    )
  }
});

React.render(
  <ScoreForm  />,
  document.querySelector('.new-score')
  )