var ChallengeSelector = React.createClass ({

  getInitialState: function() {
    return {
      challenges: []
    };
  },

  passInfo: function () {
    var challenge = React.findDOMNode(this.refs.challenge).value;
    this.props.input(challenge);
  },

  componentDidMount: function() {
    $.ajax({
      url: '/activities',
      type: 'get',
      dataType: 'json',
      success: function(challenges) {
        this.setState({challenges: challenges});
      }.bind(this),
      error: function(data) {
        console.log(data)
        console.error('there was a problem getting the challenges');
      }.bind(this)
    });
  },

  render: function() {
    var challenge_options = this.state.challenges.map(function (challenge) {
        return <option value={challenge.id}>{challenge.title}</option>
    })
    return(
      <select ref="challenge" onChange={this.passInfo}>
        {challenge_options}
      </select>
    );
  }

});

