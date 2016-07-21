var React = require('react');
var styles = require('./styles');

var color = function(value) {
  if (value === 'X') {
    return styles.ex;
  } else if (value === 'O') {
    return styles.oh;
  } else {
    return;
  }
}

var Square = React.createClass({

  render() {
    return (
      <span  onClick={this.props.makeMove.bind(this, this.props.rows, this.props.cols)}
            style={Object.assign({}, styles.square, color(this.props.value))}></span>
    )
  }
})

module.exports = Square;
