var Scoreboard = React.createClass({

  getInitialState: function() {
    return { scores: [] };
  },

  componentDidMount: function() {
    var path = '/users/' + gon.user_id;
    console.log(path);
    $.ajax({
      url: path,
      type: 'get',
      dataType: 'json',
      success: function(response) {
        console.log('tried to succeed')
        this.setState({scores: response.scores});
        console.log('success');
      }.bind(this),
      error: function(data) {
        console.log(data)
        console.error('there was a problem getting the scores');
      }.bind(this)
    });
  },

  render: function() {
    var scores = this.state.scores.map(function(score) {
      return <Score key={score.id} score={score} />
    });


    return (
        <ul>
          <li>{scores}</li>
        </ul>
    );
  }
});
