import React, { useEffect } from 'react'
import Post from '../../Shared/Posts/Post'
import './../styles/styleGroup.css'
import CreatePost from '../../Shared/CreatePost/CreatePost'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as groupActions from '../../../redux/action-creators/group'

export default function HomeGroup() {
  let { id } = useParams()

  const dispatch =  useDispatch()

  useEffect(() => {
    dispatch(groupActions.getGroupById(id))
  }, [])

  const { group } = useSelector(state => state.groupReducer)

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
          {group && group.description} 
        </p>
      </div>
    </div>
  )
}
