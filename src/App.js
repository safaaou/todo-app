import React from 'react'
import './Todo.scss'
import NewTaskForm from './NewTaskForm'
import TaskList from './TaskList'

function App() {
  
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <NewTaskForm />
      <TaskList />
    </div>
  )
}

export default App