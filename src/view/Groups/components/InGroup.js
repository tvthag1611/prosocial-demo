import React from 'react'
import './../styles/InGroup.css'
import Post from '../../Shared/Posts/Post'

export default function InGroup() {
  return (
    <div className="in-group">
      <strong className="recent-post">RECENT ACTIVITY</strong>
      <div className="post-in-group">
        <Post />
      </div>
    </div>
  )
}
