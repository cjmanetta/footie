var Scoreboard = React.createClass({
  render: function() {
    return (
      <div className="scoreboard small-6 columns">
        <h2>scoreboard</h2>
          <ul id="scoreboard-listing">
            <li>test</li>
          </ul>
      </div>
    );
  }
});

React.render(
  <Scoreboard />,
  document.body
  )