import React, { useEffect } from 'react'
import './../styles/AboutGroup.css'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as groupActions from '../../../redux/action-creators/group'

export default function AboutGroup() {
  let { id } = useParams()

  const dispatch =  useDispatch()

  useEffect(() => {
    dispatch(groupActions.getGroupById(id))
  }, [])

  const { group } = useSelector(state => state.groupReducer)
  return (
    <>
      <div className="about-group">
        <h4>About Group</h4>
        <p>
          {group ?.description} 
        </p>
      </div>
      <div className="about-group">
        <h4>Members</h4>
        <div className="about-group__members">
          <div className="header-group__invite">
          {
            group ?.members.length <= 7 ?
            group ?.members.map((member,index) => {
              if (index <= 6) {
                return (
                  <img src={member.avatar} key={index}/>
                )
              }
            }) : 
            group ?.members.map((member,index) => {
              if (index <= 5) {
                return (
                  <img src={member.avatar} key={index}/>
                )
              }
              if (index == 6) {
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
          </div>
        </div>
        <p>{`${group ?.members[0].displayName} và ${group ?.members.length - 1} người khác`}</p>
      </div>
    </>
  )
}
