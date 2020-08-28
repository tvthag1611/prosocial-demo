import React from 'react'
import './styles/Group.css'
import './styles/CreateGroup.css'
import { Link, useParams, useLocation } from 'react-router-dom'

export default function Group() {

  let { id } = useParams()
  let { pathname } = useLocation()

  return (
    <div className="in-your-group__header">
      <img className="in-your-group__cover" />
      <div className="header-group">
        <div className="header-group__name">
          <h2>ashfhasfha</h2>
          <p>
            <i className="fas fa-users"></i>
            24 members
          </p>
        </div>
        <div className="header-group__invite">
          <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
          <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
          <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
          <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
          {/* more invited and img is user online */}
          <div className="invited-group__mores">
            <img  src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"
              className="invited-group__more-user"
            />
            <i className="fa fa-ellipsis-h invited-group__more" aria-hidden="true"></i>
          </div>
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
    </div>
  )
}
