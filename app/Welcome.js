var React = require("react")

var Welcome = React.createClass({

  render: function() {
    return(
      <div>
        <h2>Choose X or O</h2>
        <button onClick={this.props.sayHello}>X</button>
        <button onClick={this.props.sayHello}>O</button>
      </div>
    )
  }
})

module.exports = Welcome;
