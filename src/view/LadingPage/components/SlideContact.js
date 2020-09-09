import React from 'react'
import '../styles/SlideContact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF} from '@fortawesome/free-brands-svg-icons'
export default function Contact() {
    return(
        <div className="contacts">
            <FontAwesomeIcon icon={faMapMarkerAlt}/> 
            <p style={{display: "inline"}}> Km 10 Nguyễn Trãi, Hà Đông, Hà Nội</p> <br/>   
            <FontAwesomeIcon icon={faEnvelope}/>
            <a href="mailto:clblaptrinhptit@gmail.com"> clblaptrinhptit@gmail.com</a><br></br>
            <FontAwesomeIcon icon = {faPhoneAlt}/>
            <p style={{display:'inline'}}> 098 517 82 98</p> <br/>
            <FontAwesomeIcon icon={faFacebookF}/>
            <a href="https://www.facebook.com/clubproptit" target='_blank' rel="noopener noreferrer"> clubproptit</a>
            <hr></hr>
        </div>
    )
}