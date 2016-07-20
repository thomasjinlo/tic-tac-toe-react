var React = require('react');
var Square = require('./Square');
var styles = require('./styles');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

var Board = React.createClass({
  render() {
    return (
      <div style={styles.board}>
        {this.props.board.map((element, rows) => {
          return element.map((square, cols) => {
            if (cols === 2) {
              return  <span>
                        <Square makeMove={this.props.makeMove}
                                rows={rows}
                                cols={cols}
                                 />
                               <br />
                      </span>
            } else {
              return <Square  makeMove={this.props.makeMove}
                              rows={rows}
                              cols={cols} />
            }
          })
        })}
    </div>)
  }
})

module.exports = Board;
