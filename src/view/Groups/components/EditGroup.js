import React, { useEffect } from 'react'
import './../styles/EditGroup.css'
import ReactTooltip from 'react-tooltip';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from '../../../redux/action-creators/group'

export default function EditGroup() {
  let { id } = useParams()

  const dispatch =  useDispatch()

  useEffect(() => {
    dispatch(groupActions.getGroupById(id))
  }, [])

  const { group } = useSelector(state => state.groupReducer)

  const deleteThisGroup = () => {
    dispatch(groupActions.deleteGroup(id))
  }

  return (
    <div className="edit-group">
      <div className="edit-group__menu">
        <button 
          type="button"
          className="edit-group__menu-delete"
          onClick={deleteThisGroup}
        >
          <i className="far fa-trash-alt"></i>
          Delete Group
        </button>
        <button type="button" className="edit-group__menu-out">
          <i className="fas fa-sign-out-alt"></i>
          Leave Group
        </button>
      </div>
      <div className="edit-info-group">
        <h5>Edit Information Group</h5>
        <input
          type="text"
          className="write-name-group"
          placeholder="Name Group"
          value={group ?.name}
          // onChange={(e) => {
          //   setGroup({
          //     ...group,
          //     name: e.target.value
          //   })
          // }}
        />
        <textarea
          type="text"
          rows="6"
          className="write-description"
          placeholder="Description Group"
          value={group ?.description}
          // onChange={(e) => {
          //   setGroup({
          //     ...group,
          //     description: e.target.value
          //   })
          // }}
        />
      </div>
      <div className="edit-admins">
        <h5>Edit Admin</h5>
        <input
          type="text"
          className="write-name-group"
          placeholder="Add admin"
        />
        <div className="edit-admins__list">
          {
            group ?.admins.map(admin => {
              return (
                <div className="edit-admins__list-item" data-tip={admin.displayName} key={admin.id}>
                  <img src={admin.avatar}/>
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                  <ReactTooltip />
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="edit-members">
        <h5>Edit Members</h5>
        <div className="edit-admins__list">
          {
            group ?.members.map(member => {
              return (
                <div className="edit-admins__list-item" data-tip={member.displayName} key={member.id}>
                  <img src={member.avatar}/>
                  <i className="fa fa-times-circle" aria-hidden="true"></i>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
