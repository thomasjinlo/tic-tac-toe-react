var React = require("react")

var Welcome = React.createClass({

  render: function() {
    return(
      <div>
        <h2>Choose X or O</h2>
        <button onClick={this.props.choosePlayer.bind(this, "X")}>X</button>
        <button onClick={this.props.choosePlayer.bind(this, "O")}>O</button>
      </div>
    )
  }
})

module.exports = Welcome;
