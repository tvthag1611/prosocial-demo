import React, { useState, useEffect, useRef } from 'react'
import './Post.css'
import {Modal} from 'react-bootstrap'
import Comment from '../Comments/Comment'
export default function Post({
  post
}) {

  const [showMenuPost, setShowMenuPost] = useState(false)
  const [showMemberTick, setShowMemberTick] = useState(false)
  const [showPost, setShowPost] = useState(false)
  const [comment, setComment] = useState('');
  const handleHiddenMemberTick = () => {
    setShowMemberTick(false);
  }
  const handleShowMemberTick = () => {
    setShowMemberTick(true);
  }
  const handleHiddenPost = () => {
    setShowPost(false);
  }
  const handleShowPost = () => {
    setShowPost(true);
  }
  const handleShowMenuPost = () => {
    setShowMenuPost(true);
  }
  const handleHiddenMenuPost = () => {
    setShowMenuPost(false);
  }
  const handleChange = (event) => {
    setComment(event.target.value);
  }

  const [maxHeight, setMaxHeight] = useState(400)

  useEffect(() => {
    let image = document.getElementsByClassName('content-img')[0]
    let header = document.getElementsByClassName('header-modal')[0]
    header && console.log(header.offsetHeight)
    image && setMaxHeight(image.offsetHeight - 127 - header.offsetHeight)
  })

  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar-user">
          <img
            className="user-ava"
            src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"
            alt="avatar-user"
          />
          <div className="name-avatar">
            <strong>{'Trần Văn Thắng '}
              <i className="fa fa-caret-right" aria-hidden="true"></i>
              {' New Feeds'}
            </strong>
            <small>Vừa ngay</small>
          </div>
        </div>
        <div className="menu-post">
          <i className="fas fa-ellipsis-h"
              onClick={handleShowMenuPost}
          ></i>
          <Modal
            show={showMenuPost}
            onHide={handleHiddenMenuPost}
            centered
            size="sm"
          >
            <div className="menu-post-item">
              <button className="btn">Xoá bài viết</button>
              <button className="btn">Sửa bài viết</button>
              <button
                className="btn"
                onClick={handleHiddenMenuPost}
              >Cancel</button>
            </div>
          </Modal>
        </div>
      </div>
      <div className="post-content">
        {
          post.type === 0 ?
            <div className="text-and-img">
              <p className="content-of-post">
                {post.content}
              </p>
              {
                post.image &&
                <img
                  className="img-post"
                  src={post.image}
                  alt="Không load được ảnh"
                />
              }
            </div> :
          <div className="text-and-poll">
            <p>{post.question}</p>
            {
              post.polls.map(poll => {
                return (
                  <div className="form-group form-check" key={poll.id}>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">{poll.option}</label>
                    <div
                      className="all-member-tick"
                      onClick={handleShowMemberTick}
                    >
                      <img
                        className="member-tick"
                        src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"
                        alt="avatar-user"
                      />
                      <img
                        className="member-tick"
                        src="https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg"
                        alt="avatar-user"
                      />
                      <img
                        className="member-tick"
                        src="https://soicauvn.com/wp-content/uploads/2020/04/20-hinh-anh-gai-xinh-toc-dai-dep-quyen-ru-va-de-thuong-nhat-1.jpg"
                        alt="avatar-user"
                      />
                      <img
                        className="member-tick"
                        src="https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg"
                        alt="avatar-user"
                      />
                      <img
                        className="member-tick"
                        src="https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-2000-de-thuong.jpg"
                        alt="avatar-user"
                      />
                      <div className="member-tick-more">+34</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
        <Modal
          show={showMemberTick}
          onHide={handleHiddenMemberTick}
          centered
          size="sm"
        >
          <div className="list-member-tick">
            <div className="one-member-tick">
              <div className="ava-member-tick"></div>
              <strong>Trần Văn Thắng</strong>
            </div>
            <div className="one-member-tick">
              <div className="ava-member-tick"></div>
              <strong>Trần Văn Thắng</strong>
            </div>
            <div className="one-member-tick">
              <div className="ava-member-tick"></div>
              <strong>Trần Văn Thắng</strong>
            </div>
            <div className="one-member-tick">
              <div className="ava-member-tick"></div>
              <strong>Trần Văn Thắng</strong>
            </div>
            <div className="one-member-tick">
              <div className="ava-member-tick"></div>
              <strong>Trần Văn Thắng</strong>
            </div>
            <div className="one-member-tick">
              <div className="ava-member-tick"></div>
              <strong>Trần Văn Thắng</strong>
            </div>
            <div className="one-member-tick">
              <div className="ava-member-tick"></div>
              <strong>Trần Văn Thắng</strong>
            </div>
          </div> 
        </Modal>
      </div>
      <div className="post-reaction">
        <div className="like-cmt-share-post">
          {/* <i className="far fa-heart"></i> */}
          <i className="fas fa-heart like-post"></i>
          <label htmlFor={"write-comment-out"+post.id}>
            <i className="far fa-comment"></i>
          </label>
          <i className="far fa-share-square"></i>
        </div>
        <strong className="count-like">10,723 likes</strong>
        <p><strong>Vũ Thành Công</strong> Ui sao tôi chịu nổi chứ, xinh quá trời luôn!</p>
        <p><strong>Nguyễn Hoài Đức</strong> Ui vợ t đây rồi </p>
        <p className="reply">View 2 replies</p>
        <strong
          className="view-all"
          onClick={handleShowPost}
        >View all comments</strong>
        {/* view post */}
        <Modal
            show={showPost}
            onHide={handleHiddenPost}
            centered
            size={post.image && 'lg'}
          >
            <div className="in-post">
              {
                post.image &&
                <div className="content-in-post">
                  <img
                    className="content-img"
                    src={post.image}
                    alt="Không load được ảnh"
                  />
                </div>
              }
              <div className="comment-in-post">
                <div className="post-header header-modal">
                    <div className="avatar-user">
                      <img
                        className="user-ava"
                        src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"
                        alt="avatar-user"
                      />
                      <div className="name-avatar">
                      <strong>{'Trần Văn Thắng '}
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                        {' New Feeds'}
                      </strong>
                        <small>Vừa ngay</small>
                      </div>
                    </div>
                    <div className="menu-post">
                      <i className="fas fa-ellipsis-h"
                          onClick={handleShowMenuPost}
                      ></i>
                      <Modal
                        show={showMenuPost}
                        onHide={handleHiddenMenuPost}
                        centered
                        size="sm"
                      >
                        <div className="menu-post-item">
                          <button className="btn">Xoá bài viết</button>
                          <button className="btn">Sửa bài viết</button>
                          <button
                            className="btn"
                            onClick={handleHiddenMenuPost}
                          >Cancel</button>
                        </div> 
                      </Modal>
                    </div>
                  </div>
                <Comment maxHeight={maxHeight} post={post} setShowMemberTick={setShowMemberTick}/>
                <div className="react-in-post">
                <div className="like-cmt-share-post">
                    {/* <i className="far fa-heart"></i> */}
                    <i className="fas fa-heart like-post"></i>
                    <label htmlFor={"write-comment-out"+post.id}>
                      <i className="far fa-comment"></i>
                    </label>
                    <i className="far fa-share-square"></i>
                  </div>
                  <strong className="count-like">10,723 likes</strong>
                </div>
                <div className="you-comment">
                  <input
                    value={comment}
                    type="text"
                    className="form-control"
                    placeholder="Add a comment..."
                    onChange={handleChange}
                    id={"write-comment-out"+post.id}
                  />
                  <button
                    onClick={() => {
                      console.log(comment)
                      setComment('');
                    }}
                    disabled={comment === '' ? true : false}
                  >Post</button>
                </div>
              </div>
            </div>
          </Modal>
          {/* ------ */}
      </div>
      <div className="you-comment">
        <input
          value={comment}
          type="text"
          className="form-control"
          placeholder="Add a comment..."
          onChange={handleChange}
          id={"write-comment-out"+post.id}
        />
        <button
          onClick={() => {
            console.log(comment)
            setComment('');
          }}
          disabled={comment === '' ? true : false}
        >Post</button>
      </div>
    </div>
  )
}
