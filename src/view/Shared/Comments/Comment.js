import React from 'react'
import './Comment.css'

export default function Comment() {
  return (
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
