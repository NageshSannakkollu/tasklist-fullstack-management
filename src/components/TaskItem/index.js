import React from 'react'
import { Link } from 'react-router-dom'
import Popup from 'reactjs-popup'

import "./index.css"

const TaskItem = (props) => {
    const {taskDetails,clickOnDelete} = props
    const {_id,name,description,dueDate,status,priority} = taskDetails

    const onDeleteTask = () => {
        clickOnDelete(_id)
    }
    const newDueDate = new Date(dueDate)
    const formattedDate = `${newDueDate.getDate()}-${newDueDate.getMonth()+1}-${newDueDate.getFullYear()}`
    const currentDate = new Date()
    // const currFormat = `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`
    const diff = `${newDueDate.getDate()}` - `${currentDate.getDate()}` 
    const formatDateClass = diff > 2 ? "over-due":""
    console.log("formatDateClass:",formatDateClass)
  return (  
    <li className='task-list-details-container'>
        <p className='title'>{name}</p>
        <p className='description'>{description}</p>
        <p className={`status ${formatDateClass}`}>{formattedDate}</p>
        <p className='status'>{status}</p>
        <p className='status'>{priority}</p>
        <p className='update'>
        <Link to={`/update-task/${_id}`}>
            <button type='button' className='update-button'>Update</button>
        </Link>
        </p>  
        <Popup 
            modal
            trigger={
                <button type='button' className='delete-button update-button'>Delete</button>
            }
        >   
        {close => (
            <div className='popup-delete-container'>
            <h4 className='delete-sure'>Are you sure you want to delete task?</h4>
            <div className='confirm-cancel-buttons-container'>
                <button className='pop-buttons confirm-button' onClick={onDeleteTask}>Confirm</button>
                <button className='pop-buttons cancel-button' onClick={() => close()}>Cancel</button>
            </div>
            </div>  
            )
        } 
        </Popup>    
    </li>
  )
}

export default TaskItem