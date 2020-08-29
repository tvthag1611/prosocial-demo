import React from 'react'
import './../styles/MembersGroup.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function MembersGroup() {
  let { id } = useParams()

  const groups = useSelector(state => state.groupReducer)

  const group = groups.find(group => group.id === Number(id))
  return (
    <>
      <div className="about-group">
        <h4>Admins</h4>
        {
          group.admins.map(admin => {
            return (
              <div className="member-items" key={admin.id}>
                <div className = 'write-post-header'>
                  <img
                    className="user-avatar-create"
                    src={admin.avatar}
                    alt="avatar-user"
                  />
                  <strong>{admin.displayName}</strong>
                </div>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            )
          })
        }
      </div>
      <div className="about-group">
        <h4>Members</h4>
        {
          group.members.map(member => {
            return (
              <div className="member-items"  key={member.id}>
                <div className = 'write-post-header'>
                  <img
                    className="user-avatar-create"
                    src={member.avatar}
                    alt="avatar-user"
                  />
                  <strong>{member.displayName}</strong>
                </div>
                <i className="fa fa-times" aria-hidden="true"></i>
              </div>
            )
          })
        }
      </div>
    </>
  )
}
