import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'

import "./index.css"

const NotFound = () =>  (
    <div className='not-found-main-container'>
      <Header/>
      <div className='not-found-inside-container'>
          <img src='https://res.cloudinary.com/dksgsqhdk/image/upload/v1734152776/Group_7484_gmjzmo.png' alt='Not found' className='not-found-no-task-image'/>
          <h2>Page Not Found...</h2>
          <p>Click here to Home Page</p>
          <Link to="/">
              <button type='button' className='add-button'>Home</button>
          </Link>
          </div>
      </div>
  )


export default NotFound