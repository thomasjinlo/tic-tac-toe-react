var React = require('react');
var Square = require('./Square');
var styles = require('./styles');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var Board = React.createClass({

  renderSquares: function(board, makeMove) {
    return board.map((arr, row) => {
      return arr.map((piece, col) => {
        return  <Square makeMove={makeMove}
                        row={row}
                        value={piece}
                        col={col} />
      })
    })
  },

  render() {
    return (
      <div className="row" style={styles.board}>
        {this.renderSquares(this.props.board, this.props.makeMove)}
      </div>
    )
  }

});

module.exports = Board;
