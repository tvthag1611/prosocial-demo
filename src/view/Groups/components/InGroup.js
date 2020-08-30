import React from 'react'
import './../styles/InGroup.css'
import Post from '../../Shared/Posts/Post'

export default function InGroup() {
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
    <div className="in-group">
      <strong className="recent-post">RECENT ACTIVITY</strong>
      <div className="post-in-group">
        {
          posts.map(post => {
            return (
              <Post post={post} />
            )
          })
        }
      </div>
    </div>
  )
}
