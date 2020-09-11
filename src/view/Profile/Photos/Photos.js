import React, { useState } from 'react'
import './Photos.css'

export const RenderPhotos = () => {
  return (
    <React.Fragment>
      <div className="constainer">
        <div className="row photos">
          <div className="col-sm-4 col-11 image-box">
            <img src="https://ak4.picdn.net/shutterstock/videos/18948284/thumb/12.jpg"></img>
          </div>
          <div className="col-sm-4 col-11 image-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Boeing_737-8FH_OK-TVF_Travel_Service_(3512072647).jpg/1200px-Boeing_737-8FH_OK-TVF_Travel_Service_(3512072647).jpg"></img>
          </div>
          <div className="col-sm-4 col-11 image-box">
            <img src="https://firebasestorage.googleapis.com/v0/b/travel-blog-71228.appspot.com/o/beach.jpg?alt=media&token=f79a2c1f-61eb-43f4-9e95-9ae959a4a063"></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
