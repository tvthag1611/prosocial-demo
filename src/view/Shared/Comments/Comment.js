import React from 'react'
import './Comment.css'

export default function Comment({maxHeight, post, setShowMemberTick}) {
  const handleShowMemberTick = () => {
    setShowMemberTick(true);
  }
  return (
    <div className="table-wrapper-scroll-y my-custom-scrollbar" style={{maxHeight: maxHeight}}>
      {
        post.type === 0 ?
        <div className="text-in-post">
          <p>{post.content}</p>
        </div> :
        <>
          <div className="text-in-post">
            <p>{post.question}</p>
          </div>
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
        </>
      }
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
                <label
                  htmlFor="write-comment"
                >Reply</label>  
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
                <label
                  htmlFor="write-comment"
                >Reply</label>  
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
                <label
                  htmlFor="write-comment"
                >Reply</label>  
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
                <label
                  htmlFor="write-comment"
                >Reply</label>  
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
                <label
                  htmlFor="write-comment"
                >Reply</label>  
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
                <label
                  htmlFor="write-comment"
                >Reply</label>  
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
                <label
                  htmlFor="write-comment"
                >Reply</label>  
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
