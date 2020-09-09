import React, { useState } from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function Profile() {
  const { user } = useSelector((state) => state.homeReducer)
  const [showMenu, setShowMenu] = useState()
  console.log(user)
  const setMenu = (menu) => {
    setShowMenu(menu)
    console.log(showMenu)
  }

  return (
    <div className="profile-page">
      <div className="header">
        <div className="cover-box">
          <img className="cover-photo" src={user.cover} />
        </div>
        <div className="avatar-box">
          <Link to={`/profile/${user.id}/image`}>
            <img className="avatar" src={user.avatar} />
          </Link>
          <h2 className="username"> {user.displayName} </h2>
        </div>
      </div>

      <div className="body_container">
        <div className="menu-bar row">
          <ul className="nav-list">
            <li className="nav-item">
              <a
                onClick={() => {
                  setMenu(1)
                }}
                className={showMenu === 1 ? 'nav-link nav-active' : 'nav-link'}
              >
                Dòng thời gian
              </a>
            </li>

            <li className="nav-item">
              <a
                onClick={() => setMenu(2)}
                className={showMenu === 2 ? 'nav-link nav-active' : 'nav-link'}
              >
                Giới thiệu
              </a>
            </li>

            <li className="nav-item">
              <a
                onClick={() => setMenu(3)}
                className={showMenu === 3 ? 'nav-link nav-active' : 'nav-link'}
              >
                Ảnh
              </a>
            </li>

            <li className="nav-item">
              <a
                onClick={() => setMenu(4)}
                className={showMenu === 4 ? 'nav-link nav-active' : 'nav-link'}
              >
                Nhiệu vụ hàng tháng
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="display-body">
        <div className={showMenu === 1 ? 'right-status' : 'body-profile'}>
          {showMenu === 1 ? (
            <div>Chỗ này là Post cá nhân</div>
          ) : showMenu === 2 ? (
            // <RenderInformation {...state}
            //   onInfoChange={handleInfoChange}
            // />
            <div>day la dong thoi gian</div>
          ) : (
            <div>
              day la nhiem vu
              {/* <CreateMission
                  addNewMission={addNewMission}
                  showAddMission={showAddMission}
                  closeAddMission={closeAddMission}
                />
                <RenderMissions /> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
