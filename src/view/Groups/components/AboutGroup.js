import React from 'react'
import './../styles/AboutGroup.css'

export default function AboutGroup() {
  return (
    <>
      <div className="about-group">
        <h4>About Group</h4>
        <p>
          dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse
          dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse 
          dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse 
          dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse dsnnsdmsdgse 
        </p>
      </div>
      <div className="about-group">
        <h4>Members</h4>
        <div className="about-group__members">
          <div className="header-group__invite">
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <div className="invited-group__mores">
                <img  src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"
                  className="invited-group__more-user"
                />
                <i className="fa fa-ellipsis-h invited-group__more" aria-hidden="true"></i>
              </div>
          </div>
        </div>
        <p>Thang va 20 nguoi khac</p>
      </div>
    </>
  )
}
