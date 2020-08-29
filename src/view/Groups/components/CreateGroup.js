import React, { useState } from 'react'
import './../styles/CreateGroup.css'
import './../../Shared/CreatePost/CreatePost.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EditGroup from './EditGroup'

export default function CreateGroup() {

  const history = useHistory()
  
  const [group, setGroup] = useState({
    url: '',
    id: 3,
    name: '',
    description: '',
    members: [],
    admins: [],
    cover: "https://www.facebook.com/images/groups/Null-Header-1640x500-2x.png",
  })

  return (
    <div className="create-group">
        <div className="write-info-group">
          <div className="write-info-group__header">
            <button
              type="button"
              className="back-to-group"
              onClick={() => history.push('/groups')}
            >
              <i className="fa fa-times" aria-hidden="true"></i>
            </button>
            <button
              type="button"
              className="back-to-home"
              onClick={() => history.push('/')}
            >
              <img src="/img/ProPTIT-logo.png" alt="back home"/>
            </button>
          </div>
          <div className="write-info-group__content">
            <h4>Create Group</h4>
            <div className = 'write-post-header'>
              <img
                className="user-avatar-create"
                src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"
                alt="avatar-user"
              />
              <strong>Vũ Đình Công</strong>
            </div>
            <div className="import-cover">
              <label
                type="button"
                className="import-cover__button"
                htmlFor="importCover"
              >
                <i className="fas fa-images"></i>
                Upload Cover Photo
              </label>
              <input
                type="file"
                className="import-file-cover"
                id="importCover"
              />
            </div>
            <input
              type="text"
              className="write-name-group"
              placeholder="Name Group"
              value={group.name}
              onChange={(e) => {
                setGroup({
                  ...group,
                  name: e.target.value
                })
              }}
            />
            <textarea
              type="text"
              rows="6"
              className="write-description"
              placeholder="Description Group"
              value={group.description}
              onChange={(e) => {
                setGroup({
                  ...group,
                  description: e.target.value
                })
              }}
            />
            <input
              type="text"
              className="invite-to-group"
              placeholder="Invite friends"
            />
            <button
              type="button"
              className="create-new-group__button"
              disabled={group.name === ''}
              onClick={() => console.log(group)}
            >
              Create
            </button>
          </div>
        </div>
        <div className="preview-new-group">
            <h5>Preview</h5>
            <img
              src={group.cover}
              className="cover-group"
              alt="cover group"
            />
            <div className="header-group">
              <div className="header-group__name">
              <h2>{!group.name ? 'Group Name' : group.name}</h2>
                <p>
                  <i className="fas fa-users"></i>
                  24 members
                </p>
              </div>
              <div className="header-group__invite">
                {
                  group.members.length <= 5 ?
                  group.members.map((member,index) => {
                    if (index <= 4) {
                      return (
                        <img src={member.avatar} key={index}/>
                      )
                    }
                  }) : 
                  group.members.map((member,index) => {
                    if (index <= 3) {
                      return (
                        <img src={member.avatar} key={index}/>
                      )
                    }
                    if (index == 4) {
                      return (
                        <div className="invited-group__mores" key={index}>
                          <img  src={member.avatar}
                            className="invited-group__more-user"
                          />
                          <i className="fa fa-ellipsis-h invited-group__more" aria-hidden="true"></i>
                        </div>
                      )
                    }
                  })
                }
                <button type="button" className="invite-member-to-group">
                  <i className="fa fa-plus" aria-hidden="true"></i>
                  Invite
                </button>
              </div>
            </div>
            <p className="description-this-group">
              {group ?.description}
            </p>
        </div>
    </div>
  )
}
