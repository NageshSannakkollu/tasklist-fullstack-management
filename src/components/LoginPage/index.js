import React,{useState} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../Header'
import "./index.css"

const LoginPage = () => {
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const [passwordType,setPasswordType] = useState(false)
    const [loginError,setLoginError] = useState(false)
    const [errorMessage,setErrorMessage] = useState('')

    const navigate = useNavigate()

    const loginHandler = async(e) => {
        e.preventDefault()
        console.log("Login:",values)
        try {
            const userResponse = await axios.post(`https://task-list-system-backend.vercel.app/login`,values)
            console.log("Jwt Token:",userResponse.data.jwtToken)
            localStorage.setItem("jwtToken",userResponse.data.jwtToken)
            navigate("/")
        } catch (err) {
            setLoginError(true)
            setErrorMessage("Invalid Credentials")

            setValues({email:'',password:''})
        }
    }

    const changePasswordType = () => {
        setPasswordType(!passwordType)
    }

    const passwordModel = passwordType?"text":"password"

  return (
    <>  
    <Header/>
    <div className='add-page-main-container login-form-main-container'>
        <h3>Login Form</h3>
        <form onSubmit={loginHandler} className='add-task-form-container login-form-container'>
        <div className='login-page-email-password-container'>
        <div className=''>
            <h4>Email:</h4>
            <input type='email' name="email" placeholder='Enter email...' className="input-form" onChange={e => setValues({...values,email:e.target.value})} required/>
        </div>
        <div>
            <h4>Password: </h4>
            <input type={`${passwordModel}`} name="password" placeholder='Enter password...' className="input-form" onChange={e => setValues({...values,password:e.target.value})} required/>
        </div>
        <br/> 
        <div className='show-password-container'>
            <label htmlFor="checkbox" className='label-title'>Show Password </label>
            <input type='checkbox' id="checkbox" className='checkbox-input' onClick={changePasswordType}/>
        </div>
        </div>
            <br/><br/>
            <button type='submit' className="add-button">Login</button>
            <p className='click-here-links'>Not Registered? <Link to="/signup" className='link-login-signup'><span>Click here..</span></Link></p>
            {loginError && <p className='error-message'>* {errorMessage}</p>}
        </form>
    </div>
    </>
  )
}

export default LoginPage
