import axios from 'axios'

export const SET_TODOS = 'SET_TODOS'
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    todos
  }
}

export function getTodos() {
  return dispatch => {
    return axios.get('/todo/all').then( res => {
      dispatch(setTodos(res.data.todos))
    })
  }
}
