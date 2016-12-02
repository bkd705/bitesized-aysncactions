import React from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  state = {
    todos: [
      { title: 'Buy Milk', completed: false },
      { title: 'Learn React', completed: false },
      { title: 'Eat Cookies', completed: false }
    ]
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

export default TodoList
