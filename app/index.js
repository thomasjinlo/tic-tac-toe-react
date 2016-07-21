var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./Board')
var Welcome = require('./Welcome');

// var _board = new Array(new Array(3), new Array(3), new Array(3))

var _board = [["", "", ""],
              ["", "", ""],
              ["", "", ""]];

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

  checkValidity: function(row, col) {
    // empty string == true;
    var board = this.state.board;
    var square = board[row][col];
    return square === '';
  },

  makeMove: function(row, col) {
    if (this.checkValidity(row, col)) {
      var board = this.state.board;
      board[row][col] = this.state.currentPlayer.symbol;

      this.setState({
        board: board
      });
    } else {
      console.log('invalid move');
    }
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
