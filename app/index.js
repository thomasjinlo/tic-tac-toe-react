var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./Board')
var Welcome = require('./Welcome');

// var _board = new Array(new Array(3), new Array(3), new Array(3))
var _board = [[1,2,3],
              [4,5,6],
              [7,8,9]];

var TicTacToe = React.createClass({

  getInitialState: function() {
    return {
      board: _board,
      player1: {},
      player2: {},
      gameStatus: false,
      currentPlayer: null
    }
  },

  choosePlayer: function(symbol) {
    var player1 = this.state.player1,
        player2 = this.state.player2;

    if (symbol === "X") {
      player1.symbol = "X",
      player2.symbol = "O"
    } else {
      player2.symbol = "X",
      player1.symbol = "O"
    }

    this.setState({
      player1: player1,
      player2: player2,
      gameStatus: true,
      currentPlayer: this.state.player1
    })
  },

  makeMove: function(row, col) {
    var board = this.state.board;
    console.log("row is ", row)
    console.log("col is ", col)
    board[row][col] = this.state.currentPlayer.symbol;
    console.log(board)
    this.setState({
      board: board
    })

  },

  render: function() {
    var gameState = this.state.gameStatus ? <Board board={this.state.board}
                                                   makeMove={this.makeMove}  />
                                          : <Welcome choosePlayer={this.choosePlayer} />;
      return (
        gameState
    )
  }
})

ReactDOM.render(
  <TicTacToe />,
  document.getElementById('app')
)
