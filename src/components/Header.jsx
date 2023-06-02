import React from 'react'
import AddTaskForm from './AddTaskForm'

const Header = () => {
  return (
    <div>
        <h1>TASK TRACKER</h1>
        <button className='btn btn-danger'>CLOSE ADD TASK BAR</button>
        <AddTaskForm/>
    </div>
  )
}

export default Header