import React, { useState } from 'react'
import './../styles/MenuGroup.css'
import { useHistory } from 'react-router-dom'

export default function MenuGroup() {
  let history = useHistory()
  const toCreateGroup = () => {
    history.push("/groups/create")
  }

  const moreGroup =
  <>
    <div className="go-to-group">
      <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
      <div className="name-go-to-group">
        <h5>BSKdsnkflsdnflkslkeflkselkfnlksnefklnslkenflksndlfknselnfles</h5>
        <p>2 thang truoc</p>
      </div>
    </div>
    <div className="go-to-group">
      <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
      <div className="name-go-to-group">
        <h5>BSKdsnkflsdnflkslkeflkselkfnlksnefklnslkenflksndlfknselnfles</h5>
        <p>2 thang truoc</p>
      </div>
    </div>
    <div className="go-to-group">
      <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
      <div className="name-go-to-group">
        <h5>BSKdsnkflsdnflkslkeflkselkfnlksnefklnslkenflksndlfknselnfles</h5>
        <p>2 thang truoc</p>
      </div>
    </div>
  </>

  const [showMoreGroup, setShowMoreGroup] = useState(false)
  const [showMenuGroup, setShowMenuGroup] = useState(false)

  return (
    <>
      {/* View menu group in phone */}
      <div className="menu-group__mobile">
        <div className="title-group">
          <h3>Groups</h3>
          <label
            htmlFor="searchAll"
            className="search-group">
            <i className="fa fa-search" aria-hidden="true"></i>
          </label>
        </div>
        <div className="menu-in-group__mobile">
          <button type="button" className="your-manager__mobile">
            <i className="fas fa-marker"></i>
            Manager
          </button>
          <button type="button" className="your-group__mobile">
            <i className="fa fa-users" aria-hidden="true"></i>
            Groups
          </button>
          <button
            type="button"
            className="create-post__mobile"
            onClick={toCreateGroup}
          >
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
            Create
          </button>
        </div>
        <div className="list-group__mobile">
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>Ban su kien</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>Ban dao tao</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>Ban truyen thong</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>Ban nhan su</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>Ban vo van</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>hsdjkghsdjkhg</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>hsdjkghsdjkhg</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>hsdjkghsdjkhg</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>hsdjkghsdjkhg</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>hsdjkghsdjkhg</strong>
          </div>
          <div className="list-group-item__mobile">
            <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
            <strong>hsdjkghsdjkhg</strong>
          </div>
        </div>
      </div>
      {/* View menu group in laptop and tablet */}
      <div className={showMenuGroup ? "menu-group slide-right-group" : "menu-group slide-left-group"}>
        <div
          className="bars-group"
          onClick={() => {setShowMenuGroup(!showMenuGroup)}}
        >
          {
            showMenuGroup ?
              <i className="fa fa-times" aria-hidden="true"></i>
              : <i className="fa fa-bars" aria-hidden="true"></i>
          }
        </div>
        <div className="title-group">
          <h3>Groups</h3>
          <label
            htmlFor="searchAll"
            className="search-group">
            <i className="fa fa-search" aria-hidden="true"></i>
          </label>
        </div>
        <div className="list-go-to-group">
          <div className="in-create-new-group">
            <button 
              type="button"
              className="create-new-group"
              onClick={toCreateGroup}
            >
              <i className="fa fa-plus" aria-hidden="true"></i>
              Create New Group
            </button>
          </div>
          <div className="your-manager">
            <h5>Groups You Manager</h5>
            <div className="go-to-group">
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <div className="name-go-to-group">
                <h5>BSKdsnkflsdnflkslkeflkselkfnlksnefklnslkenflksndlfknselnfles</h5>
                <p>2 thang truoc</p>
              </div>
            </div>
            <div className="go-to-group">
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <div className="name-go-to-group">
                <h5>BSKdsnkflsdnflkslkeflkselkfnlksnefklnslkenflksndlfknselnfles</h5>
                <p>2 thang truoc</p>
              </div>
            </div>
            <div className="go-to-group">
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <div className="name-go-to-group">
                <h5>BSKdsnkflsdnflkslkeflkselkfnlksnefklnslkenflksndlfknselnfles</h5>
                <p>2 thang truoc</p>
              </div>
            </div>
            {showMoreGroup ? moreGroup : null}
            {!showMoreGroup ?
              <button
                type="button"
                onClick={() => setShowMoreGroup(true)}
                className="your-groups-more">
                See more
                <i className="fa fa-angle-down" aria-hidden="true"></i>
              </button> : null
            }
          </div>
          <div className="your-group">
          <h5>Your Groups</h5>
            <div className="go-to-group">
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <div className="name-go-to-group">
                <h5>BSKdsnkflsdnflkslkeflkselkfnlks</h5>
                <p>2 thang truoc</p>
              </div>
            </div>
            <div className="go-to-group">
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <div className="name-go-to-group">
                <h5>BSKdsnkflsdnflkslkefl</h5>
                <p>2 thang truoc</p>
              </div>
            </div>
            <div className="go-to-group">
              <img src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"/>
              <div className="name-go-to-group">
                <h5>BSKdsnkflsd</h5>
                <p>2 thang truoc</p>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
