import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header'
import "./index.css"

const RegisterUser = () => {
    const [values,setValues] = useState({
        username:"",
        email:'',
        password:'',
        role:''
    })
    const [passwordType,setPasswordType] = useState(false)

    const navigate = useNavigate()
    const registerHandler = async(e) => {
        e.preventDefault()
        // console.log("Registration:",values)
        await axios.post(`https://task-list-system-backend.onrender.com/signup`,values)
        .then((response)=> {
            console.log(response)
            navigate("/login")
        }).catch(error => {
            console.log(error.response.data)
        })
    }
    const changePasswordType = () => {
        setPasswordType(!passwordType)
    }

    const passwordModel = passwordType?"text":"password"

  return (
    <>  
    <Header/>
    <div className='add-page-main-container'>
        <h3>Signup/Registration Form</h3>
        <form onSubmit={registerHandler} className='add-task-form-container'>
        <div className="task-name-description-container">
        <div className=''>
            <h4>Username:</h4>
            <input type='text' name="username" placeholder='Enter username...' className="input-form" onChange={e => setValues({...values,username:e.target.value})} required/>
        </div>
        <div className=''>
            <h4>Email:</h4>
            <input type='email' name="email" placeholder='Enter email...' className="input-form" onChange={e => setValues({...values,email:e.target.value})} required/>
        </div>
        </div>
        <div className="task-name-description-container">
        <div className='password-show-password-container'>
        <div>
            <h4>Password: </h4>
            <input type={`${passwordModel}`} name="password" placeholder='Enter password...' className="input-form" onChange={e => setValues({...values,password:e.target.value})} required/>
        </div>
        <div className='show-password-container'>
            <label htmlFor="checkbox" className='label-title'>Show Password </label>
            <input type='checkbox' id="checkbox" className='checkbox-input' onClick={changePasswordType}/>
        </div>
        </div>
        <div>
        <h4>Role: </h4>
        <select onChange={e => setValues({...values,role:e.target.value})}  className="select-input-form">
            <option value="user" selected>user</option>
            <option value="admin">admin</option>
        </select>
        </div>
        </div>
            <br/><br/>
            <button type='submit' className="add-button">Signup</button>
            <p className='click-here-links'>Already Registered? <Link to="/login" className='link-login-signup'><span>Login</span></Link></p>
        </form>
    </div>
    </>
  )
}

export default RegisterUser
