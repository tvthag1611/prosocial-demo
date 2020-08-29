import React, { useState, useEffect } from 'react'
import './../styles/MenuGroup.css'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as userActions from '../../../redux/action-creators/home'

export default function MenuGroup() {
  let history = useHistory()
  const toCreateGroup = () => {
    history.push("/groups/create")
  }

  const { user } = useSelector(state => state.homeReducer)

  console.log(user)

  const groupManager = user.participatingGroup.filter((group) => group.isAdmin)
  const groupMember = user.participatingGroup.filter((group) => !group.isAdmin)

  const [showMoreGroup, setShowMoreGroup] = useState(groupManager.length <= 3)
  const [showMenuGroup, setShowMenuGroup] = useState(false)
  const [showMenuGroupMobile, setShowMenuGroupMobile] = useState(0)

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
          <button
            type="button"
            className="your-manager__mobile"
            onClick={() => setShowMenuGroupMobile(0)}
          >
            <i className="fas fa-marker"></i>
            Manager
          </button>
          <button 
            type="button"
            className="your-group__mobile"
            onClick={() => setShowMenuGroupMobile(1)}
          >
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
          {
            showMenuGroupMobile === 0 ?
            groupManager.map(group => {
              return (
                <Link to={`groups/${group.id}`} className="list-group-item__mobile" key={group.id}>
                  <img src={group.cover}/>
                  <strong>{group.name}</strong>
                </Link>
              )
            }) :
            groupMember.map(group => {
              return (
                <Link to={`groups/${group.id}`} className="list-group-item__mobile" key={group.id}>
                  <img src={group.cover}/>
                  <strong>{group.name}</strong>
                </Link>
              )
            })
          }
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
            {
              groupManager.map((group, index) => {
                if (index <=2) {
                  return (
                    <Link to={`groups/${group.id}`} className="go-to-group" key={group.id}>
                      <img src={group.cover}/>
                      <div className="name-go-to-group">
                      <h5>{group.name}</h5>
                        {/* <p>2 thang truoc</p> */}
                      </div>
                    </Link>
                  )
                }
              })
            }
            {showMoreGroup ?
              groupManager.map((group, index) => {
                if (index >2) {
                  return (
                    <Link to={`groups/${group.id}`} className="go-to-group" key={group.id}>
                      <img src={group.cover}/>
                      <div className="name-go-to-group">
                      <h5>{group.name}</h5>
                        {/* <p>2 thang truoc</p> */}
                      </div>
                    </Link>
                  )
                }
              })
              : null
            }
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
            {
              groupMember.map(group => {
                return (
                  <Link to={`groups/${group.id}`} className="go-to-group" key={group.id}>
                    <img src={group.cover}/>
                    <div className="name-go-to-group">
                      <h5>{group.name}</h5>
                      {/* <p>2 thang truoc</p> */}
                    </div>
                  </Link>
                )
              })
            }
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
