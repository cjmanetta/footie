var Score = React.createClass({
  render: function() {
    var photo = "/assets/" + this.props.score.photo
    return (
      <tr>
          <td className="single line center aligned">
            <img className="ui mini circular centered image" src={photo}/>
            <p className="extra">{this.props.score.firstname}</p>
          </td>
          <td className="single line center aligned">
            <h1>{this.props.score.score}</h1>
          </td>
      </tr>
    );
  }
});