import React from 'react'
import CreatePost from '../Shared/CreatePost/CreatePost'
import Post from '../Shared/Posts/Post'
import RightPost from './RightPost'

export default function Home() {
  return (
    <>
      <div className="left-content col-sm-12 col-lg-8 col-md-12">
        <CreatePost />
        <Post typePost={1}/>
        <Post typePost={2}/>
        <Post typePost={3}/>
      </div>
      <div className="col-sm-0 col-md-0 col-lg-4">
        <RightPost />
      </div>
    </>
  )
}
