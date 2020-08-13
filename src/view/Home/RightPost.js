import React from 'react'
import './Styles/RightPost.css'
export default function RightPost() {
  const usersOnline = [
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Nguyễn Hoài Đức"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Nguyễn Đình Tài"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Trần Văn Thắng"
    }, {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Vũ Đình Công"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Nguyễn Hoài Đức"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Nguyễn Hoài Đức"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Nguyễn Đình Tài"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Trần Văn Thắng"
    }, {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Vũ Đình Công"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Nguyễn Hoài Đức"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Nguyễn Hoài Đức"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Nguyễn Đình Tài"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Trần Văn Thắng"
    }, {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Vũ Đình Công"
    },
    {
      imgSrc: "img/ProPTIT-logo.png",
      name: "Nguyễn Hoài Đức"
    },
  ]
  var userList = usersOnline.map((user,index) => {
    return (
      <div className="user" key = {index}>
        <img src={user.imgSrc} className="user-logo" alt="user-online"/>
        <small className="username">{user.name}</small>
        <i className="fas fa-circle online-icon"></i>
      </div>
    )
  })
  return (
    <div className="top-fixed">
      <div className="people-online">
        <div className="yourself">
          <img src="img/ProPTIT-logo.png" className="yourself-logo" alt="user-online"/>
          <small className="yourname">Nguyễn Hoài Đức</small>
        </div>
        <div style={{ textAlign: 'center' }}><h6>Thành viên đang online</h6></div>
        <div className="user-online">


          {userList}
        </div>
      </div>
    </div>



  )
}
