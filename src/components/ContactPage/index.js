import React from 'react'
import Header from '../Header'
import { ImLocation } from "react-icons/im";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./index.css"

const ContactPage = () => (
    <div className='about-container'>
        <Header/>
        <img src="https://res.cloudinary.com/dksgsqhdk/image/upload/v1735020734/sonK02g1HhQpYMD96kBANE5hEYY_psafqw.png" alt="logo" className='contact-company-logo'/>
        <hr className='hr-line'/>
        <div className='about-inside-container contact-inside-container'>
            <div>
                <p className='about-para'>With a core mission to streamline manufacturing complexities, Robotspace continues to be a driving force in making the manufacturing process simpler, more efficient, and innovative.</p>
            </div>
        
        <div className='location-contact-mail-media-container'>
            <div className='location-infos-container'>
                <ImLocation className="contact-react-icons"/>
                <p className='location-para'>Scoobylabs Robotics Pvt Ltd. Hitech City, Hyderabad, Telangana 500055</p>
            </div>
        <div className='contact-mail-social-media-container'>
            <div className='location-infos-container'>
                <MdLocalPhone className="contact-react-icons"/>
                <p>+91-8121380696</p>
            </div>
            <div className='location-infos-container'>
                <IoMdMail className="contact-react-icons"/>
                <p>info@robotspace.in</p>
            </div>
            <div className='location-infos-container'>
                <FaLinkedin className="contact-react-icons"/>
                <p>Robotspace</p>
            </div>
        </div>
        </div>
        </div>
    </div>
  )


export default ContactPage