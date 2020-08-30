import React from 'react'
import CreatePost from '../Shared/CreatePost/CreatePost'
import Post from '../Shared/Posts/Post'
import RightPost from './RightPost'

export default function Home() {
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
    <>
      <div className="left-content col-sm-12 col-lg-8 col-md-12">
        <CreatePost />
        {
          posts.map(post => {
            return (
              <Post post={post} />
            )
          })
        }
      </div>
      <div className="col-sm-0 col-md-0 col-lg-4">
        <RightPost />
      </div>
    </>
  )
}
