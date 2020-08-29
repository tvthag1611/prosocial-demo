import React, { useEffect } from 'react'
import './styles/Group.css'
import './styles/CreateGroup.css'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as groupActions from '../../redux/action-creators/group'

export default function Group() {

  let { id } = useParams()
  let { pathname } = useLocation()

  const dispatch =  useDispatch()

  useEffect(() => {
    dispatch(groupActions.getGroupById(id))
  }, [])

  const { group } = useSelector(state => state.groupReducer)

  return (
    group ? 
    <div className="in-your-group__header">
      <img
        src={group.cover}
        className="in-your-group__cover"
      />
      <div className="header-group">
        <div className="header-group__name">
        <h2>{group.name}</h2>
          <p>
            <i className="fas fa-users"></i>
            {group.members.length}
          </p>
        </div>
        <div className="header-group__invite">
          {
            group.members.length <= 5 ?
            group.members.map((member,index) => {
              if (index <= 4) {
                return (
                  <img src={member.avatar} key={index}/>
                )
              }
            }) : 
            group.members.map((member,index) => {
              if (index <= 3) {
                return (
                  <img src={member.avatar} key={index}/>
                )
              }
              if (index == 5) {
                return (
                  <div className="invited-group__mores" key={index}>
                    <img  src={member.avatar}
                      className="invited-group__more-user"
                    />
                    <i className="fa fa-ellipsis-h invited-group__more" aria-hidden="true"></i>
                  </div>
                )
              }
            })
          }
          <button type="button" className="invite-member-to-group">
            <i className="fa fa-plus" aria-hidden="true"></i>
            Invite
          </button>
        </div>
      </div>
      <div className="in-your-group__menu">
        <div className="in-your-group__menu-nav">
          <Link className={pathname === `/groups/${id}/about` ? "in-your-group__menu-active" : ""} to={`/groups/${id}/about`}>About</Link>
          <Link className={pathname === `/groups/${id}` ? "in-your-group__menu-active" : ""} to={`/groups/${id}`}>Discussion</Link>
          <Link className={pathname === `/groups/${id}/members` ? "in-your-group__menu-active" : ""} to={`/groups/${id}/members`}>Members</Link>
          <Link className={pathname === `/groups/${id}/media` ? "in-your-group__menu-active" : ""} to={`/groups/${id}/media`}>Media</Link>
        </div>
        <div className="in-your-group__menu-more">
          <i className="fa fa-search" aria-hidden="true"></i>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </div>
      </div>
    </div> : <div></div>
  )
}
