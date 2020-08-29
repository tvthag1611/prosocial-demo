import React from 'react'
import './Profile.css'
import { ImageView } from '../Shared/ImageView/ImageView'

export default function Profile({ state, setState }) {
  
  state = {
    id: 1 ,
    avt: "https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg",
    cover: "https://firebasestorage.googleapis.com/v0/b/travel-blog-71228.appspot.com/o/travel2.jpg?alt=media&token=6e5e9aae-624c-46e4-825c-9986036e64fc",
    grade: "D18",
    gender: "Nam",
    address: "",
    email: "abc@gmail.com",
    // position,
    // missions,
    showMenu: 1,
    username: "tvt",
    displayName: "Trần Văn Thắng",
    dateOfBirth: "01/02/1000",
    description: "Hello world",
    phoneNumber: "0123456789",
    // idChoose
  } 

  return (
    <div className ="profile-page">
      <div className="header">
        <div className="cover-box">
          <img className="cover-photo" 
            src={state.cover}/>
        </div>
        <div className="avatar-box">
          <ImageView circleBorder key={state.id} src={state.avt} />
          <h3 className="name"> {state.displayName} </h3>
        </div>
        
      </div>
    </div>
  )
}
