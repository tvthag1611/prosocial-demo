import React, { useState } from 'react'
import './Styles/Post.css'
import {Modal} from 'react-bootstrap'
export default function Post() {

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

  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar-user">
          <div className="fake-img"></div>
          <div className="name-avatar">
            <strong>Trần Văn Thắng</strong>
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
        {/* <div className="just-text">
          <p>Hôm nay thi như shit mọi người à!</p>
        </div> */}
        {/* <div className="text-and-poll">
          <p>Hôm nay của mọi người thế nào?</p>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Tuyệt vời</label>
            <div
              className="all-member-tick"
              onClick={handleShowMemberTick}
            >
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick-more">+34</div>
            </div>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck2" />
            <label className="form-check-label" for="exampleCheck2">Bình thường, không có gì đặc biệt</label>
            <div
              className="all-member-tick"
              onClick={handleShowMemberTick}
            >
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick-more">+21</div>
            </div>
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck3" />
            <label className="form-check-label" for="exampleCheck3">Cực kỳ tệ luôn</label>
            <div
              className="all-member-tick"
              onClick={handleShowMemberTick}
            >
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick"></div>
              <div className="member-tick-more">+10</div>
            </div>
          </div>
        </div> */}
        <div className="text-and-img"> 
          <p className="content-of-post">Đẹp như này thì công sao chịu nổi</p>
          <img
            className="img-post"
            src="https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg"
            alt="Không load được ảnh"
          />
        </div>
        <Modal
          show={showMemberTick}
          onHide={handleHiddenMemberTick}
          centered
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
          <i className="far fa-comment"></i>
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
            size='lg'
          >
            <div className="in-post">
              <div className="content-in-post">
                <div className="post-header">
                <div className="avatar-user">
                  <div className="fake-img"></div>
                  <div className="name-avatar">
                    <strong>Trần Văn Thắng</strong>
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
                  <p className="content-of-post">Đẹp như này thì công sao chịu nổi</p>
                  <img
                    className="img-post"
                    src="https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg"
                    alt="Không load được ảnh"
                  />
                </div>
              </div>
              <div className="comment-in-post">
                <div className="header-comment">
                  <strong>Comments</strong>
                </div>
                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                  <table className="table not-table">
                    <tbody>
                      <tr className="your-comment">
                        <div className="avatar-cmt"></div>
                        <div className="what-cmt">
                          <p><strong>Vũ Thành Công</strong> Ui sao tôi chịu nổi chứ, xinh quá trời luôn!</p>
                          <div className="reaction-cmt">
                            <div className="like-in-post">
                              <i className="fas fa-heart like-post"></i>
                              <p>3</p>  
                            </div>
                            <span>Reply</span>  
                          </div>
                        </div>
                      </tr>
                      <tr className="your-comment">
                        <div className="avatar-cmt"></div>
                        <div className="what-cmt">
                          <p><strong>Vũ Thành Công</strong> Ui sao tôi chịu nổi chứ, xinh quá trời luôn!</p>
                          <div className="reaction-cmt">
                            <div className="like-in-post">
                              <i className="fas fa-heart like-post"></i>
                              <p>3</p>  
                            </div>
                            <span>Reply</span>  
                          </div>
                        </div>
                      </tr>
                      <tr className="your-comment">
                        <div className="avatar-cmt"></div>
                        <div className="what-cmt">
                          <p><strong>Vũ Thành Công</strong> Ui sao tôi chịu nổi chứ, xinh quá trời luôn!</p>
                          <div className="reaction-cmt">
                            <div className="like-in-post">
                              <i className="fas fa-heart like-post"></i>
                              <p>3</p>  
                            </div>
                            <span>Reply</span>  
                          </div>
                        </div>
                      </tr>
                      <tr className="your-comment">
                        <div className="avatar-cmt"></div>
                        <div className="what-cmt">
                          <p><strong>Vũ Thành Công</strong> Ui sao tôi chịu nổi chứ, xinh quá trời luôn!</p>
                          <div className="reaction-cmt">
                            <div className="like-in-post">
                              <i className="fas fa-heart like-post"></i>
                              <p>3</p>  
                            </div>
                            <span>Reply</span>  
                          </div>
                        </div>
                      </tr>
                      <tr className="your-comment">
                        <div className="avatar-cmt"></div>
                        <div className="what-cmt">
                          <p><strong>Vũ Thành Công</strong> Ui sao tôi chịu nổi chứ, xinh quá trời luôn!</p>
                          <div className="reaction-cmt">
                            <div className="like-in-post">
                              <i className="fas fa-heart like-post"></i>
                              <p>3</p>  
                            </div>
                            <span>Reply</span>  
                          </div>
                        </div>
                      </tr>
                      <tr className="your-comment">
                        <div className="avatar-cmt"></div>
                        <div className="what-cmt">
                          <p><strong>Vũ Thành Công</strong> Ui sao tôi chịu nổi chứ, xinh quá trời luôn!</p>
                          <div className="reaction-cmt">
                            <div className="like-in-post">
                              <i className="fas fa-heart like-post"></i>
                              <p>3</p>  
                            </div>
                            <span>Reply</span>  
                          </div>
                        </div>
                      </tr>
                      <tr className="your-comment">
                        <div className="avatar-cmt"></div>
                        <div className="what-cmt">
                          <p><strong>Vũ Thành Công</strong> Ui sao tôi chịu nổi chứ, xinh quá trời luôn!</p>
                          <div className="reaction-cmt">
                            <div className="like-in-post">
                              <i className="fas fa-heart like-post"></i>
                              <p>3</p>  
                            </div>
                            <span>Reply</span>  
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="react-in-post">
                <div className="like-cmt-share-post">
                    {/* <i className="far fa-heart"></i> */}
                    <i className="fas fa-heart like-post"></i>
                    <i className="far fa-comment"></i>
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
