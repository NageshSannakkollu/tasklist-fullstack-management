import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios';

import "./index.css"
import Header from "../Header";

const UpdateTaskPage = () => {
    const {id} = useParams()
    console.log(id)
    const [values,setValues] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        const getData = async() => {
            axios.get(`https://task-list-system-backend.vercel.app/tasks/${id}`)
            .then((response) => {
                // console.log("Response:",response.data)
                setValues([response.data])
            }).catch(error => {
                console.log(error)
            })
        }
        getData()
    },[id])

    console.log()

    const updateTaskHandler = event=> {
        event.preventDefault()
        axios.patch(`https://task-list-system-backend.vercel.app/tasks/${id}`,values[0])
        .then(response => {
            navigate("/")
            console.log("Response:",response)
        }).catch(error => {
            console.log("Error:",error)
        })
    }

    // const dueDate = values.map(eachItem => eachItem.dueDate) 
    // const newDueDate = new Date(dueDate)
    // const formatDueDate = `${newDueDate.getDate()}-${newDueDate.getMonth()+1}-${newDueDate.getFullYear()}`
    // // console.log("formatDueDate:",formatDueDate)
    
  return (
    <>
    <Header/>
    <div className='add-page-main-container'>
        <h2>Update Form</h2>
        {values.map(eachItem => {
            return(
                <form onSubmit={updateTaskHandler} className='add-task-form-container' key={eachItem.id}>
                <div className="task-name-description-container">
                <div>
                    <h4>Task Name:</h4>
                    <input type='text' value={eachItem.name} className="input-form" onChange={e => setValues([{...values[0],name:e.target.value}])} required/>
                </div>
                <div>
                    <h4>Description: </h4>
                    <input type='text' value={eachItem.description} className="input-form" onChange={e => setValues([{...values[0],description:e.target.value}])} required/>
                </div>
                </div>
                <div className="task-name-description-container">
                <div>
                    <h4>Due Date:</h4>
                    <input type='date' className="input-form" onChange={e => setValues([{...values[0],dueDate:e.target.value}])}/>
                </div>
                <div>
                    <h4>Task Status: </h4>
                    <select onChange={e => setValues([{...values[0],status:e.target.value}])} value={eachItem.status} className="select-input-form">
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                </div>
                <div>
                    <h4>Task Priority: </h4>
                    <select onChange={e => setValues([{...values[0],priority:e.target.value}])} value={eachItem.priority} className="select-input-form">
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                    </select>
                </div>
                    <br/><br/>
                    <div className="update-page-button-container">
                        <button type="submit" className="update-button-update-page">Update</button>
                    </div>
                </form>
            )
        })} 
    </div>
    </>
  )
}

export default UpdateTaskPage
