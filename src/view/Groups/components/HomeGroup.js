import React from 'react'
import Post from '../../Shared/Posts/Post'
import './../styles/styleGroup.css'
import CreatePost from '../../Shared/CreatePost/CreatePost'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function HomeGroup() {
  let { id } = useParams()

  const groups = useSelector(state => state.groupReducer)

  const group = groups.find(group => group.id === Number(id))
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
          {group.description} 
        </p>
      </div>
    </div>
  )
}
