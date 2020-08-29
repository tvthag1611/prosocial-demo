import React, { useState, useEffect, useRef } from 'react'
import './Styles/Navar.css'
import useClickOutside from './Function/useClickOutside'
import { Link, useRouteMatch, useLocation, NavLink } from 'react-router-dom'
export default function Navar() {

  let [searchBoxContent, setSetSearchBoxContent] = useState(null);
  let [showMultiTask, setShowMultiTask] = useState(false);
  let [showNotification, setShowNotification] = useState(false);
  const handleClick = (e) => {
    console.log(searchBoxContent);
  }
  const handleChange = (e) => {
    setSetSearchBoxContent(e.target.value);
  }
  const onShowMultiTaskClick = () => {
    setShowNotification(false);
    setShowMultiTask(!showMultiTask);
  }
  const onShowNoticationClick = () => {
    setShowMultiTask(false);
    setShowNotification(!showNotification);
  }
  var notifications = [
    {
      author: 'Thế Anh',
      action: ' Đăng bài viết mới',
      timeCreated: '11 phút trước'
    },
    {
      author: 'Công Khanh',
      action: ' Đã trả lời bình luận của bạn',
      timeCreated: '11 phút trước'
    },
    {
      author: 'Tiến Hải',
      action: ' Đã bày tỏ cảm xúc về bài viết của bạn',
      timeCreated: '11 phút trước'
    }
  ]
  let notificationElm = notifications.map((item, index) => {
    return (
      < div key={index} className="notification-item np" >
        <div className="notification-item-content">
          <strong>{item.author}</strong>
          {item.action}

        </div>
        <div className="notification-time"><smal>{item.timeCreated}</smal></div>
      </div >
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
  let { pathname } = useLocation();
  return (

    <nav className="nav ">
      <div className="row nav-bar col-sm-12">
        <div className="nav-currency col-sm-12 col-md-6 col-lg-8 col-xl-8">
          <img src="img/ProPTIT-logo.png" className="nav-bar-brand" />
          <form >
            <input
              type="text"
              placeholder="Search..."
              value={searchBoxContent}
              onChange={handleChange}
              className="nav-bar-search-input" />
            <button
              type="button"
              className="btn-search"
              onClick={handleClick}
            >
              <i class="fas fa-search nav-bar-search bg-grey"></i>
            </button>
          </form>
        </div>

        <div className="nav-currency col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <NavLink exact={true} activeClassName='nav-active' to="/" ><i className="fas fa-home nav-bar-icon"></i></NavLink>
          <NavLink activeClassName='nav-active' to="/groups" ><i className="fas fa-user-friends nav-bar-icon"></i></NavLink>
          <a><i class="fas fa-image nav-bar-icon "></i></a>
          <a><i class="fas fa-comments nav-bar-icon"></i></a>
          <i
            class="fas fa-bell nav-bar-icon noti"
            onClick={onShowNoticationClick}
          >
            <span className={showNotification ? "rectangle " : "rectangle dp-none"}></span>
            <i class="fas fa-circle noti-item"></i></i>
          <i
            class="fas nav-img  nav-bar-icon "
            onClick={onShowMultiTaskClick}
          >
            <img
              className="user-ava"
              onClick={onShowMultiTaskClick}
              src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"
              alt="avatar-user"
            />
            <span className={showMultiTask ? "rectangle " : "rectangle dp-none"}></span>
          </i>
        </div>
      </div>
      <div className={

        showMultiTask ? "dropdown-profile " : "dropdown-profile dp-none"}
        ref={refTasks}
      >
        <div className="block-container">

          <div className="dropdown-item"><a><i class="far fa-user-circle"></i>Profile</a></div>
          <div className="dropdown-item"><a><i class="fas fa-cog"></i>Setting</a></div>
          <div className="dropdown-item"><a><i class="far fa-envelope"></i>Inbox</a></div>
          <div className="dropdown-item"><a><i class="far fa-question-circle"></i>Need help?</a></div>
          <div className="dropdown-item"><a><i class="fas fa-sign-out-alt"></i>Sign out</a></div>
        </div>
      </div>
      <div
        className={showNotification ? "block-profile " : "block-profile dp-none"}
        ref={refNotis}
      >
        <div className="block-container">
          {notificationElm}
        </div>
      </div>
    </nav >
  )
}
