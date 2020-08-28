import React from 'react'
import Post from '../../Shared/Posts/Post'
import './../styles/styleGroup.css'
import CreatePost from '../../Shared/CreatePost/CreatePost'

export default function HomeGroup() {
  return (
    <div className="home-group">
      <div className="home-group__post">
        <CreatePost />
        <Post typePost={1}/>
        <Post typePost={2}/>
        <Post typePost={3}/>
      </div>
      <div className="home-group__about">
        <h4>About</h4>
        <p>
          dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse
          dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse 
          dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse 
          dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse 
        </p>
      </div>
    </div>
  )
}
