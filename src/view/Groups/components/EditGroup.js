import React, { useEffect, useState } from 'react'
import './../styles/EditGroup.css'
import ReactTooltip from 'react-tooltip';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from '../../../redux/action-creators/group'


export default function EditGroup() {
  let { id } = useParams()

  const dispatch =  useDispatch()
  const {user} = useSelector(state => state.homeReducer)
  const [isAdmin, setIsAdmin] = useState(false);
  const { group } = useSelector(state => state.groupReducer)

  useEffect(() => {
    dispatch(groupActions.getGroupById(id))
  }, [])

  
  useEffect(() => {
    if(group){
      
      group.admins.forEach(item => {
        if(item.id === user.id)
          setIsAdmin(true)
      })
    }
  }, [group])

  const deleteThisGroup = () => {
    dispatch(groupActions.deleteGroup(id))
  }

  return (
    <div className="edit-group">
      <div className="edit-group__menu">
        {
          isAdmin?
          <button 
          type="button"
          className="edit-group__menu-delete"
          onClick={deleteThisGroup}
        >
          <i className="far fa-trash-alt"></i>
          Delete Group
        </button>:<div></div>
        }
        <button type="button" className="edit-group__menu-out">
          <i className="fas fa-sign-out-alt"></i>
          Leave Group
        </button>
      </div>
      
      <div className="edit-info-group">
        {
          isAdmin?
          <h5>Edit Information Group</h5>
          :
          <h5>Information Group</h5>
          
        }
        {
          isAdmin?
          <input
          type="text"
          className="write-name-group"
          placeholder="Name Group"
          value={group ?.name}
          
        />:<div></div>
        }
        
        <textarea
          type="text"
          rows="6"
          className="write-description"
          placeholder="Description Group"
          value={group ?.description}
          disabled = {isAdmin?false:true}
        />
      </div>
      <div className="edit-admins">
        {
          isAdmin?
          <h5>Edit Admin</h5>
          :
          <h5>Admin</h5>
        }
        
        {
          isAdmin?
          <input
          type="text"
          className="write-name-group"
          placeholder="Add admin"
          
        />:<div></div>
        }
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
        {
          isAdmin?
          <h5>Edit Members</h5>:
          <h5>Members</h5>
        }
        
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
