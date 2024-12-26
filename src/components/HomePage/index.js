import {useEffect,useState} from 'react'
import Header from "../Header"
import axios from 'axios'
import TaskItem from "../TaskItem"

import "./index.css"
import { Link } from 'react-router-dom'


const HomePage = () => {
 const [taskList,setTaskList] = useState([])
 const [deleted,setDeleted] = useState(true)
 const[searchInput,setSearchInput] = useState('')

  useEffect(() => {
    if(deleted){
      setDeleted(false)
    const getTaskData = async() => {
      const response = await fetch("https://task-list-system-backend.onrender.com/tasks");
      const data = await response.json()
      setTaskList(data)
    }   
    getTaskData()
  }
  },[deleted])

  const clickOnDelete = (id) => {
    console.log("delete Id:",id)
    axios.delete(`https://task-list-system-backend.onrender.com/tasks/${id}`)
    .then(response => {
      console.log(response)
      setDeleted(true)
    }).catch(err => {
      console.log(err)
    })
  }

  const searchTask = e => {
    setSearchInput(e.target.value)
  }

// console.log("taskList:",taskList)
const taskListLength = taskList.length;
// console.log("Length:",taskListLength)

const filterTaskList = taskList.filter(eachTask => (
    eachTask.status.toLowerCase().includes(searchInput.toLowerCase()) ||
    eachTask.priority.toLowerCase().includes(searchInput.toLowerCase()
  ) 
))

// console.log(filterTaskList)

  return (
    <div className='main-app-container'>
      <Header/>
      <div className='home-page-container'>
      <div className='title-buttons-container'>
        <h2 className='main-title'>Task List Management</h2>
        <div className='login-signup-buttons-container'>
          <Link to="/login">
              <button type='button' className='login-button'>Login</button>
          </Link>
          <Link to="/signup">
              <button type='button' className='login-button'>Signup</button>
          </Link>
        </div>
        </div>
        <div className='add-task-list-container'>
            <h3>{`Task List: ${taskListLength}`}</h3>
            <input type='search' placeholder='Search by Status or Priority...' onChange={searchTask} className='search-input'/>
            <Link to="/add-task">
                <button type='button' className='add-task-button update-button'>Add Task</button>
            </Link>
        </div>
        <div className='task-list-table-info-container'>
            <ul className='task-list-main-titles-container'>
              <li className='title'>Task Name</li>
              <li className='description'>Description</li>
              <li className='status'>Due Date</li>
              <li className='title'>Status</li>
              <li className='title'>Priority</li>
              <li className='update'>Update Action</li>
              <li className='delete'>Delete Action</li>
            </ul>
          <div>
          {filterTaskList.length > 0 ?
          (
              <ul className='task-list-items'>
                {filterTaskList.map((eachTask,index) => (
                    <TaskItem taskDetails={eachTask} key={eachTask._id} clickOnDelete = {clickOnDelete}/>
                  ))}
              </ul>)
          :
          (
            <div className='no-tasks-container'>
            <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1734152776/Group_7484_gmjzmo.png' alt='Not found' className='no-task-image'/>
              <h2>No Tasks</h2>
              <p>Click here to add Tasks...</p>
              <Link to="/add-task">
                <button type='button' className='add-task-button update-button'>Add Task</button>
            </Link>
            </div>
          )
          }

          </div>
       </div>
    </div>
    
    </div>
  )
}

export default HomePage
