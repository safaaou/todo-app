import React from 'react'
import { useTasks } from './TaskProvider'

export default function Task({ task }) {

  const { setStatusTask } = useTasks()

  
  const checkTask = e => {setStatusTask(task.id, e.target.checked); console.log(e.target.checked);}

  return (
    <tr>
      <td>
        <input type="checkbox"  onChange={checkTask} />
      </td>
      <td>
        <span className={ task.complete ? 'task-done' : '' }>{ task.task }</span>
      </td>
    </tr>
  )
}