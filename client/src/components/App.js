import React, { Component } from 'react';
import TodoList from './todo/TodoList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-3"></div>
        <div className="pure-u-1-3">
          <TodoList />
        </div>
        <div className="pure-u-1-3"></div>
      </div>
    );
  }
}

export default App;
