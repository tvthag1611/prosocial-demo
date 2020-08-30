import React, { useState } from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function Profile() {
  const {user} = useSelector(state => state.homeReducer)
  
  return (
    <div className ="profile-page">
      <div className="header">
        <div className="cover-box">
          <img className="cover-photo" 
            src={user.cover}/>
        </div>
        <div className="avatar-box">
          <Link to={`/profile/${user.id}/image`}><img src={user.avatar} /></Link>
          <h3 className="name"> {user.displayName} </h3>
        </div>
      </div>
    </div>
  )
}
