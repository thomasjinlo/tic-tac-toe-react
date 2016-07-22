var React = require('react');
var styles = require('./styles');

function exOh(value) {
  if (value === "X") {
    return "../ex.jpg"
  } else if (value === "O") {
    return "../o.jpg"
  } else {
    return ""
  }
}

var Square = React.createClass({

  render() {
    return (
      <span className="col-xs-4" onClick={this.props.makeMove.bind(this, this.props.row, this.props.col)}
            style={styles.square}>
        <img src={exOh(this.props.value)} style={styles.img} />
      </span>
    )
  }
})

module.exports = Square;
