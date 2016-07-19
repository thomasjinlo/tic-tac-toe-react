var React = require('react');
var ReactDOM = require('react-dom');
// var Square = require('./Square');
var Welcome = require('./Welcome')

var TicTacToe = React.createClass({

  render: function() {
    return (
      <Welcome
        sayHello={this.sayHello}
      />
    )
  },
  sayHello: function() {
    console.log('Hello')
  }
})

ReactDOM.render(
  <TicTacToe />,
  document.getElementById('app')
)
