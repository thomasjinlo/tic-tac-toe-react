var React = require("react");
var styles = require('./styles');

var Welcome = React.createClass({

  render: function() {
    return(
      <div className="text-center">
        <h1 style={Object.assign({}, styles.title, styles.tic)}>Tic</h1>
        <h1 style={styles.title}>Tac</h1>
        <h1 style={styles.title}>Toe</h1>
        <button className="btn btn-lg" onClick={this.props.choosePlayer.bind(this, "X")} style={styles.button}>X</button>
        <button className="btn btn-lg" onClick={this.props.choosePlayer.bind(this, "O")} style={styles.button}>O</button>
      </div>
    )
  }
})

module.exports = Welcome;
