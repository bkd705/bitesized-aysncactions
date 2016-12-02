import React from 'react'
import TodoItem from './TodoItem'
import { connect } from 'react-redux'
import { getTodos } from '../../actions/todoActions'

class TodoList extends React.Component {
  state = {
    todos: []
  }

  componentWillMount() {
    this.props.getTodos()
  }

  componentDidUpdate(prevProps, nextProps) {
    if(prevProps.todos.length === 0) {
      this.setState({
        todos: this.props.todos
      })
    }
  }

  render(){
    const emptyTodos = (
      <p>You have no todos!</p>
    )

    const todos = this.state.todos.map((todo, key) => {
      return <TodoItem todo={todo} key={key} />
    })

    return(
      <div className="todo-container">
        <h1>Todo List</h1>
        <ul className="todo-list">
          {todos.length === 0 ? emptyTodos : todos}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { getTodos })(TodoList)
