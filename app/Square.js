var React = require('react');
var styles = require('./styles');

var Square = React.createClass({

  render() {
    return (
      <div  onClick={this.props.makeMove.bind(this, this.props.rows, this.props.cols)}
            style={styles.square}></div>
    )
  }
})

module.exports = Square;
