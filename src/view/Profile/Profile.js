import React, { useState } from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { RenderInformation } from './Information/Information'
import CreatePost from '../Shared/CreatePost/CreatePost'
import Post from '../Shared/Posts/Post'

export default function Profile() {
  const { user } = useSelector((state) => state.homeReducer)
  const [showMenu, setShowMenu] = useState(1)
  console.log(user)
  const setMenu = (menu) => {
    setShowMenu(menu)
    console.log(showMenu)
  }

  const posts = [
    {
      id: 1,
      type: 0,
      content: 'Hình như tôi chiều các e quá nên các e hư đúng không',
      image: '',
    },
    {
      id: 2,
      type: 0,
      content: 'Hình như tôi chiều các e quá nên các e hư đúng không',
      image:
        'https://soicauvn.com/wp-content/uploads/2020/04/20-hinh-anh-gai-xinh-toc-dai-dep-quyen-ru-va-de-thuong-nhat-1.jpg',
    },
    {
      id: 3,
      type: 1,
      question: 'Hình như tôi chiều các e quá nên các e hư đúng không',
      polls: [
        {
          id: 1,
          option: 'Dạ không',
        },
        {
          id: 2,
          option: 'E là của anh',
        },
        {
          id: 3,
          option: 'Ghê quá',
        },
      ],
    },
  ]

  return (
    <div className="profile-page">
      <div className="header-info">
        <div className="cover-box">
          <img className="cover-photo" src={user.cover} />
        </div>
        <div className="avatar-box">
          <Link to={`/profile/${user.id}/image`}>
            <img className="avatar" src={user.avatar} />
          </Link>
          <h2 className="username"> {user.displayName} </h2>
        </div>
        <p className="description-this-user">{user.description}</p>
      </div>

      <div className="body_container">
        <div className="menu-bar">
          <ul className="nav-list_info">
            <li className="nav-item_info">
              <a
                onClick={() => {
                  setMenu(1)
                }}
                className={
                  showMenu === 1 ? 'nav-link nav-active_info' : 'nav-link'
                }
              >
                Dòng thời gian
              </a>
            </li>

            <li className="nav-item_info">
              <a
                onClick={() => setMenu(2)}
                className={
                  showMenu === 2 ? 'nav-link nav-active_info' : 'nav-link'
                }
              >
                Giới thiệu
              </a>
            </li>

            <li className="nav-item_info">
              <a
                onClick={() => setMenu(3)}
                className={
                  showMenu === 3 ? 'nav-link nav-active_info' : 'nav-link'
                }
              >
                Ảnh
              </a>
            </li>

            <li className="nav-item_info">
              <a
                onClick={() => setMenu(4)}
                className={
                  showMenu === 4 ? 'nav-link nav-active_info' : 'nav-link'
                }
              >
                Nhiệu vụ hàng tháng
              </a>
            </li>
          </ul>
        </div>

        <div className="display-body">
          <div className={showMenu === 1 ? 'right-status' : 'body-profile'}>
            {showMenu === 1 ? (
              <div className="newfeed-user">
                <CreatePost />
                {posts.map((post) => {
                  return <Post post={post} />
                })}
              </div>
            ) : showMenu === 2 ? (
              <div>
                <RenderInformation {...user} />
              </div>
            ) : (
              <div>day la nhiem vu</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
