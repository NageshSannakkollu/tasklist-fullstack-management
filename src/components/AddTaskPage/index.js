import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "../Header"
import axios from 'axios'


import "./index.css"

const AddTaskPage = () => {
    const [values,setValues] = useState({
        name:'',
        description:'',
        dueDate:"",
        status:'Pending',
        priority:"Medium"
    })

    const navigate = useNavigate()

    const addTaskHandler = async(e) => {
        e.preventDefault()
        console.log("Values:",values)
        await axios.post(`https://task-list-system-backend.onrender.com/tasks`,values) 
        .then((response)=> {
            console.log(response)
            navigate("/")
            
        }).catch(error => {
            console.log(error)
        })
        
    }

  return (
    <>
    <Header/>
    <div className='add-page-main-container'>
        <h3>Add task</h3>
        <form onSubmit={addTaskHandler} className='add-task-form-container'>
        <div className="task-name-description-container">
        <div>
            <h4>Task Name:</h4>
            <input type='text' name="name" placeholder='Enter Task name..' className="input-form" onChange={e => setValues({...values,name:e.target.value})} required/>
        </div>
        <div>
            <h4>Description: </h4>
            <input type='text' name="description" placeholder='Enter description...' className="input-form" onChange={e => setValues({...values,description:e.target.value})} required/>
        </div>
        </div>
         <div className="task-name-description-container">
        <div>
            <h4>Due Date:</h4>
            <input type='date' name="dueDate" placeholder='Enter due date...' className="input-form" onChange={e => setValues({...values,dueDate:e.target.value})} required/>
        </div>
        <div>
            <h4>Task Status: </h4>
            <select onChange={e => setValues({...values,status:e.target.value})} className="select-input-form">
                <option value="Pending" selected>Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
        </div>
        </div>
        <div>
            <h4>Task Priority: </h4>
            <select onChange={e => setValues({...values,priority:e.target.value})} className="select-input-form">
                <option value="Low">Low</option>
                <option value="Medium" selected>Medium</option>
                <option value="High">High</option>
            </select>
        </div>
            <br/><br/>
            <button type='submit' className="add-button">Add Task</button>
        </form>
    </div>
    </>
  )
}

export default AddTaskPage
