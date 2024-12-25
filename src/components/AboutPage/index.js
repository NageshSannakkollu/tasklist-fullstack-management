import React from 'react'
import Header from '../Header'
import "./index.css"

const AboutPage = () => (
    <div className='about-container'>
        <Header/>
        <div className='about-inside-container'>
        <h1 className='about-info-title'>A Different Approach,<br/> a New Method of Manufacturing</h1>
        <p className='about-para'>What sets Robotspace apart is our holistic approach to simplification.<br/> We don't just offer products; we provide comprehensive solutions that <br/> 
        encompass cutting-edge robotics, state-of-the-art automation,and a deep <br/>understanding of your specific manufacturing needs. Our goal is to <br/>reshape the manufacturing landscape, making it more efficient, reliable,<br/>and user friendly</p>
    </div>
    <hr className='hr-line'/>
    </div>
  )

export default AboutPage