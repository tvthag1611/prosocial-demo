import React, { useEffect } from 'react'
import Post from '../../Shared/Posts/Post'
import './../styles/styleGroup.css'
import CreatePost from '../../Shared/CreatePost/CreatePost'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as groupActions from '../../../redux/action-creators/group'

export default function HomeGroup() {
  let { id } = useParams()

  const dispatch =  useDispatch()

  useEffect(() => {
    dispatch(groupActions.getGroupById(id))
  }, [])

  const { group } = useSelector(state => state.groupReducer)

  const posts = [
    {
      id: 1,
      type: 0,
      content: 'Hình như tôi chiều các e quá nên các e hư đúng không',
      image: ''
    },
    {
      id: 2,
      type: 0,
      content: 'Hình như tôi chiều các e quá nên các e hư đúng không',
      image: 'https://soicauvn.com/wp-content/uploads/2020/04/20-hinh-anh-gai-xinh-toc-dai-dep-quyen-ru-va-de-thuong-nhat-1.jpg'
    },
    {
      id: 3,
      type: 1,
      question: 'Hình như tôi chiều các e quá nên các e hư đúng không',
      polls: [
        {
          id: 1,
          option: 'Dạ không'
        },
        {
          id: 2,
          option: 'E là của anh'
        },
        {
          id: 3,
          option: 'Ghê quá'
        },
      ]
    },
  ]

  return (
    <div className="home-group">
      <div className="home-group__post">
        <CreatePost />
        {
          posts.map(post => {
            return (
              <Post post={post} />
            )
          })
        }
      </div>
      <div className="home-group__about">
        <h4>About</h4>
        <p>
          {group && group.description} 
        </p>
      </div>
    </div>
  )
}
