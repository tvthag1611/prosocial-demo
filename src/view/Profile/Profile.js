import React, { useState, useEffect } from 'react'
import './Profile.css'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
// import { RenderInformation } from './Information/Information'
import CreatePost from '../Shared/CreatePost/CreatePost'
import Post from '../Shared/Posts/Post'
import Missons from './Missions/Missons'

export default function Profile() {
  const { user } = useSelector((state) => state.homeReducer)
  const [showMenu, setShowMenu] = useState(4)

  const setMenu = (menu) => {
    setShowMenu(menu)
    console.log(showMenu)
  }

  const [target, setTarget] = useState([
    {
      assignedUser: {
        id: 1,
        avatar:
          'http://apis.aiforce.xyz/media/acddd8ca-ec64-41ff-b92b-e2caf03a1d16.jpg',
        displayName: 'ProAdmin',
      },
      name: 'A+ Phân tích thiết kế',
      isDone: false,
      point: {
        id: 1,
        score: 100,
        description: 'Mục tiêu bình thường',
      },
      status: 0,
      createdTime: '2020-09-03T00:51:33Z',
    },
    {
      assignedUser: {
        id: 1,
        avatar:
          'http://apis.aiforce.xyz/media/acddd8ca-ec64-41ff-b92b-e2caf03a1d16.jpg',
        displayName: 'ProAdmin',
      },
      name: 'A+ Công nghệ phần mềm',
      isDone: false,
      point: {
        id: 1,
        score: 100,
        description: 'Mục tiêu bình thường',
      },
      status: 0,
      createdTime: '2020-08-13T01:01:04Z',
    },
  ])

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const tasksFilter = target.filter(
      (targetItem) => targetItem.assignedUser.id === user.id,
    )

    const tasksMonth = tasksFilter.filter((taskItem) => {
      let date = new Date(taskItem.createdTime)
      return date.getMonth() + 1 === 9
    })
    console.log(tasksMonth)
    setTasks(tasksMonth)
  }, [target])

  const addNewTask = (task) => {
    let indexTask
    console.log(indexTask)
    console.log(tasks[0].date, typeof tasks[0].date)
    if (indexTask === -1) {
      setTasks([
        ...tasks,
        {
          date: task.createAt,
          missions: [task],
        },
      ])
    }
    console.log(tasks)
  }

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
                {/* <CreatePost />
                {posts.map((post) => {
                  return <Post post={post} />
                })} */}
                hihi
              </div>
            ) : showMenu === 2 ? (
              <div>{/* <RenderInformation {...user} /> */}hihi</div>
            ) : showMenu === 3 ? (
              <div>Day la anh</div>
            ) : (
              <Missons
                tasks={tasks}
                setTasks={setTasks}
                // addNewTask={addNewTask}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
