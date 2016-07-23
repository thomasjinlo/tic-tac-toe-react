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

  selectCurrentlyActive: function(currentPiece, piece) {
    if (currentPiece === piece) return styles.active
  },

  render() {
    return (
      <div className="row" style={styles.board}>
        <div className="col-xs-12">
          <div style={Object.assign({}, styles.indicator, this.selectCurrentlyActive(this.props.currentPiece, "X"))} className="pull-left">X</div>
          <div style={Object.assign({}, styles.indicator, this.selectCurrentlyActive(this.props.currentPiece, "O"))} className="pull-right">O</div>
        </div>
        {this.renderSquares(this.props.board, this.props.makeMove)}
      </div>
    )
  }

});

module.exports = Board;
