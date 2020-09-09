import React, { useState } from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

export default function Profile() {
<<<<<<< HEAD
  const { user } = useSelector(state => state.homeReducer);
  const [showMenu, setShowMenu] = useState();

  const setMenu = (menu) => {
    debugger;
    setShowMenu(menu);
    console.log(showMenu)
  }
=======
  const { user } = useSelector((state) => state.homeReducer)
>>>>>>> c2c29ebdef062c0072b38ddac31ceff3373f3776

  return (
    <div className="profile-page">
      <div className="header">
        <div className="cover-box">
<<<<<<< HEAD
          <img className="cover-photo"
            src={user.cover} />
        </div>
        <div className="avatar-box">
          <Link to={`/profile/${user.id}/image`}><img className="avatar" src={user.avatar} /></Link>
=======
          <img className="cover-photo" src={user.cover} />
        </div>
        <div className="avatar-box">
          <Link to={`/profile/${user.id}/image`}>
            <img src={user.avatar} />
          </Link>
>>>>>>> c2c29ebdef062c0072b38ddac31ceff3373f3776
          <h3 className="name"> {user.displayName} </h3>
        </div>
      </div>

      <div className="body_container">
        <div className="menu-bar row">
          <ul className="nav-list">
            <li className='nav-item nav-active'>
              <a className='nav-link '>
                {showMenu === 1
                  ? 'Dòng thời gian'
                  : showMenu === 2
                    ? 'Giới thiệu'
                    : showMenu === 3
                      ? 'Ảnh'
                      : 'Nhiệu vụ hàng tháng'}
              </a>
            </li>

            <li className="nav-item">
              <a
                onClick={() => {
                  debugger;
                  setMenu(1)
                }}
                className={showMenu === 1 ? 'nav-link active' : 'nav-link'}
              >
                Dòng thời gian
              </a>
            </li>

            <li className="nav-item">
              <a
                onClick={() => setMenu(2)}
                className={showMenu === 2 ? 'nav-link active' : 'nav-link'}
              >
                Dòng thời gian
              </a>
            </li>

            <li className="nav-item">
              <a
                onClick={() => setMenu(3)}
                className={showMenu === 3 ? 'nav-link active' : 'nav-link'}
              >
                Dòng thời gian
              </a>
            </li>

            <li className="nav-item">
              <a
                onClick={() => setMenu(4)}
                className={showMenu === 4 ? 'nav-link active' : 'nav-link'}
              >
                Dòng thời gian
              </a>
            </li>
          </ul>
        </div>
      </div>


    </div>

  )
}
