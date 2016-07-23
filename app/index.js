var React = require('react');
var ReactDOM = require('react-dom');
var Board = require('./Board')
var Welcome = require('./Welcome');
var styles = require('./styles');

// var _board = new Array(new Array(3), new Array(3), new Array(3))

var _board = [["", "", ""],
              ["", "", ""],
              ["", "", ""]];

var TicTacToe = React.createClass({

  getInitialState: function() {
    return {
      board: _board,
      player1: {name: 'Player 1'},
      player2: {name: 'Player 2'},
      gameStatus: false,
      possibleSolutions: [],
      currentPlayer: null,
      gameOver: false
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

  switchPlayers: function() {
    var currentPlayer = this.state.currentPlayer === this.state.player1 ? this.state.player2 : this.state.player1;

    this.setState({
      currentPlayer: currentPlayer
    })
  },

  threeInRow: function() {
    var solutions = this.state.possibleSolutions;
    var winningCombination = this.state.currentPlayer.symbol.repeat(3)
    var bool = false;

    solutions.forEach(function(combination) {
      if (combination == winningCombination) {
        bool = true;
      }
    })
    return bool
  },

  checkWin: function() {
    // find all possible solutions
    this.getHorizontals()
    this.getVerticals()
    this.getDiagonals()
    // loop through solutions to see if there is a three in a row
    return this.threeInRow();
  },

  getDiagonals: function() {
    var board = this.state.board;
    var solutions = this.state.possibleSolutions;

    var downDiag = board[0][0] + board[1][1] + board[2][2]
    var upDiag = board[2][0] + board[1][1] + board[0][2]

    solutions.push(downDiag)
    solutions.push(upDiag)

    this.setState({
      possibleSolutions: solutions
    })
  },

  getVerticals: function() {
    var board = this.state.board;
    var solutions = this.state.possibleSolutions;

    board.forEach(function(arr, col){
      var line = '';
      arr.forEach(function(square, row) {
        line += board[row][col]
      })
      solutions.push(line)
    })

    this.setState({
      possibleSolutions: solutions
    })
  },

  getHorizontals: function() {
    var board = this.state.board;
    var solutions = this.state.possibleSolutions;

    board.forEach(function(arr) {
      var line = arr.join('');
      solutions.push(line);
    })
    this.setState({
      possibleSolutions: solutions
    })
  },

  checkDraw: function() {
    var board = this.state.board;
    var bool = true;
    console.log(board)
    board.forEach(function(element) {
      element.forEach(function(squareValue) {
        if (squareValue === "") bool = false;
      })
    })
    console.log("draw")
    return bool
  },

  checkGameOver: function() {
    if (this.checkWin()) return this.checkWin();
    if (this.checkDraw()) return this.checkDraw();
  },

  makeMove: function(row, col) {
    if (this.checkValidity(row, col)) {
      var board = this.state.board;
      board[row][col] = this.state.currentPlayer.symbol;

      this.setState({
        board: board
      });

      if (this.checkGameOver()) {
        this.setState({
          gameOver: true
        })
      } else {
        this.switchPlayers();
      }

      this.setState({
        possibleSolutions: []
      })

    } else {
      console.log('invalid move');
    }
  },

  renderGameState: function() {
    var gameState = this.state.gameStatus ? <Board board={this.state.board}
                                                   makeMove={this.makeMove}
                                                   currentPiece={this.state.currentPlayer.symbol} />
                                          : <Welcome choosePlayer={this.choosePlayer} />;
    return gameState;
  },

  resetGame: function() {
    var _board = [["", "", ""],
                  ["", "", ""],
                  ["", "", ""]];

    this.setState({
      board: _board,
      player1: {},
      player2: {},
      gameStatus: false,
      possibleSolutions: [],
      currentPlayer: null,
      gameOver: false,
    });
  },

  componentDidUpdate: function() {
    if (this.state.gameOver) {
      (this.checkWin()) ? alert("Winner is " + this.state.currentPlayer.name) : alert("Cats game!")
      var resetConfirmation = confirm('Reset this shit?');
      if (resetConfirmation) this.resetGame();main-container
    }
  },

  render: function() {
      return (
        <div className="container" style={styles.appContainer}>
          {this.renderGameState()}
        </div>
    )
  }
})

ReactDOM.render(
  <TicTacToe />,
  document.getElementById('app')
)
