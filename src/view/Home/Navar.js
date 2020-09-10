import React, { useState, useEffect, useRef } from 'react'
import './Styles/Navar.css'
import useClickOutside from './Function/useClickOutside'
import {
  Link,
  useLocation,
  NavLink,
  useParams,
  useHistory,
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as Actions from '../../redux/action-creators/home'
export default function Navar() {
  let params = useParams()
  console.log(params)

  const history = useHistory()

  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.homeReducer)

  let [searchBoxContent, setSetSearchBoxContent] = useState(null)
  let [showMultiTask, setShowMultiTask] = useState(false)
  let [showNotification, setShowNotification] = useState(false)
  const handleClick = (e) => {
    console.log(searchBoxContent)
  }
  const handleChange = (e) => {
    setSetSearchBoxContent(e.target.value)
  }
  const onShowMultiTaskClick = () => {
    setShowNotification(false)
    setShowMultiTask(!showMultiTask)
  }
  const onShowNoticationClick = () => {
    setShowMultiTask(false)
    setShowNotification(!showNotification)
  }
  const handleLogoutSystem = () => {
    localStorage.removeItem('userData')
    dispatch(Actions.logoutUser(false))
    history.push('/')
  }
  var notifications = [
    {
      author: 'Thế Anh',
      action: ' Đăng bài viết mới',
      timeCreated: '11 phút trước',
    },
    {
      author: 'Công Khanh',
      action: ' Đã trả lời bình luận của bạn',
      timeCreated: '11 phút trước',
    },
    {
      author: 'Tiến Hải',
      action: ' Đã bày tỏ cảm xúc về bài viết của bạn',
      timeCreated: '11 phút trước',
    },
  ]
  let notificationElm = notifications.map((item, index) => {
    return (
      <div key={index} className="notification-item np">
        <div className="notification-item-content">
          <strong>{item.author}</strong>
          {item.action}
        </div>
        <div className="notification-time">
          <small>{item.timeCreated}</small>
        </div>
      </div>
    )
  })
  const refTasks = useRef()
  const refNotis = useRef()
  useClickOutside(refTasks, () => {
    if (showMultiTask == true) {
      setShowMultiTask(false)
    }
  })
  useClickOutside(refNotis, () => {
    if (showNotification == true) {
      setShowNotification(false)
    }
  })
  let { pathname } = useLocation()
  return pathname !== `/groups/create` &&
    pathname !== `/profile/${user.id}/image` &&
    pathname !== `/login` &&
    pathname !== `/` ? (
    <nav className="nav ">
      <div className="row nav-bar col-sm-12">
        <div className="nav-currency col-sm-12 col-md-6 col-lg-8 col-xl-8">
          <img
            src="/img/ProPTIT-logo.png"
            className="nav-bar-brand"
            onClick={() => history.push('/')}
          />
          <form>
            <input
              type="text"
              placeholder="Search..."
              value={searchBoxContent}
              onChange={handleChange}
              className="nav-bar-search-input"
            />
            <button type="button" className="btn-search" onClick={handleClick}>
              <i className="fas fa-search nav-bar-search bg-grey"></i>
            </button>
          </form>
        </div>

        <div className="nav-currency col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <NavLink activeClassName="nav-active" to="/home">
            <i className="fas fa-home nav-bar-icon"></i>
          </NavLink>
          <NavLink activeClassName="nav-active" to="/groups">
            <i className="fas fa-user-friends nav-bar-icon"></i>
          </NavLink>
          <NavLink activeClassName="nav-active" to="/gallery">
            <i className="fas fa-image nav-bar-icon "></i>
          </NavLink>
          <NavLink activeClassName="nav-active" to="/messenger">
            <i className="fas fa-comments nav-bar-icon"></i>
          </NavLink>
          <i
            className="fas fa-bell nav-bar-icon noti"
            onClick={onShowNoticationClick}
          >
            <span
              className={showNotification ? 'rectangle ' : 'rectangle dp-none'}
            ></span>
            <i className="fas fa-circle noti-item"></i>
          </i>
          <i
            className="fas nav-img  nav-bar-icon "
            onClick={onShowMultiTaskClick}
          >
            <img
              className="user-ava"
              onClick={onShowMultiTaskClick}
              src={user.avatar}
              alt="avatar-user"
            />
            <span
              className={showMultiTask ? 'rectangle ' : 'rectangle dp-none'}
            ></span>
          </i>
        </div>
      </div>
      <div
        className={
          showMultiTask ? 'dropdown-profile ' : 'dropdown-profile dp-none'
        }
        ref={refTasks}
      >
        <div className="block-container">
          <Link
            to={`/profile/${user.id}`}
            className="dropdown-item block-container_link"
          >
            <a>
              <i className="far fa-user-circle"></i>
            </a>
            Profile
          </Link>
          <div className="dropdown-item">
            <a>
              <i className="fas fa-cog"></i>Setting
            </a>
          </div>
          <div className="dropdown-item">
            <a>
              <i className="far fa-envelope"></i>Inbox
            </a>
          </div>
          <div className="dropdown-item">
            <a>
              <i className="far fa-question-circle"></i>Need help?
            </a>
          </div>
          <div className="dropdown-item" onClick={handleLogoutSystem}>
            <a>
              <i className="fas fa-sign-out-alt"></i>Sign out
            </a>
          </div>
        </div>
      </div>
      <div
        className={
          showNotification ? 'block-profile ' : 'block-profile dp-none'
        }
        ref={refNotis}
      >
        <div className="block-container">{notificationElm}</div>
      </div>
    </nav>
  ) : (
    <div></div>
  )
}
