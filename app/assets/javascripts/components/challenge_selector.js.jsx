var ChallengeSelector = React.createClass ({

  getInitialState: function() {
    return {
      challenges: [],
      value: null,
    };
  },

  clear: function() {
    this.setState({ value: null })
  },

  _handleChange: function (event) {
    this.setState({value: event.target.value});
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
        return <option value={challenge.id} key={challenge.id}>{challenge.title}</option>
    })
    return(
      <select ref="challenge" value={this.state.value} onChange={this._handleChange}>
      <option selected={this.state.value == null}>select a challenge</option>
        {challenge_options}
      </select>
    );
  }

});

