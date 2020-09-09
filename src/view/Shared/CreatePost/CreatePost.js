import React, { useState, useEffect } from 'react'
import './CreatePost.css'
import { Modal } from 'react-bootstrap'
export default function CreatePost(props) {
  const [username, setUserName] = useState('Công')
  const [show, setShow] = useState(false)
  const [dataFile, setDataFile] = useState(null)
  const [display, setDisplay] = useState('text')
  const [polls, setPolls] = useState([
    {
      id: 1,
      text: '',
      listMemberTick: [],
    },
    {
      id: 2,
      text: '',
      listMemberTick: [],
    },
    {
      id: 3,
      text: '',
      listMemberTick: [],
    },
  ])

  const handlePreviewImage = (e) => {
    console.log(e.target.files[0])
    // preview file
  }

  const clickTypePoll = () => {
    setDisplay('poll')
    setShow(true)
  }

  const clickTypeImage = () => {
    setDisplay('image')
    setShow(true)
  }

  const addOption = () => {
    const option = {
      id: 4,
      text: '',
      listMemberTick: [],
    }

    setPolls([...polls, option])
  }

  return (
    <div className="create-post">
      <div className="create-post__container-content" id="content">
        <img
          className="user-avatar-create"
          src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"
          alt="avatar-user"
        />
        <button
          className="create-new-post-button"
          onClick={() => {
            setShow(true)
            setDisplay('text')
          }}
        >
          <p>{username + ' ơi, bạn đang nghĩ gì?'}</p>
        </button>
      </div>

      <div className="create-post__footer">
        <label
          htmlFor="choose-image"
          className="choose-type-new-post"
          onClick={clickTypeImage}
        >
          <i className="fas fa-images"></i>
          Photo/Video
        </label>
        <input
          type="file"
          id="choose-image"
          onChange={(e) => handlePreviewImage(e)}
        />
        <button className="choose-type-new-post" onClick={clickTypePoll}>
          <i className="fas fa-poll create-poll" />
          Polls
        </button>
      </div>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header className="header-create-post">
          <i
            className="fas fa-times-circle btn-close-modal"
            onClick={() => setShow(false)}
          ></i>
          <Modal.Title className="title-create-post">Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="write-post">
            <div className="write-post-header">
              <img
                className="user-avatar-create"
                src="https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg"
                alt="avatar-user"
              />
              <strong>Vũ Đình Công</strong>
            </div>
            <textarea
              type="text"
              rows="6"
              placeholder={username + ' ơi, bạn đang nghĩ gì?'}
              className="write-on-post"
            ></textarea>
            <div
              className={
                display === 'poll'
                  ? 'preview-polls'
                  : display === 'image'
                  ? 'preview-images'
                  : ''
              }
            >
              <i
                className={
                  display === 'text'
                    ? ''
                    : 'fas fa-times-circle btn-close-preview'
                }
                onClick={() => setDisplay('text')}
              ></i>
              {display === 'poll' ? (
                <>
                  <div className="preview__polls">
                    <strong>Add Poll</strong>
                    {polls.map((poll, index) => {
                      return (
                        <div className="poll-option" key={index}>
                          <input
                            type="text"
                            placeholder={'Option ' + (index + 1)}
                          />
                          <i className="fas fa-times-circle btn-close-option"></i>
                        </div>
                      )
                    })}
                  </div>
                  <div className="more-option">
                    <button onClick={addOption}>
                      <i className="fas fa-plus"></i>
                      Add option
                    </button>
                    <button>
                      Poll options
                      <i className="fas fa-sort-down"></i>
                    </button>
                  </div>
                </>
              ) : display === 'image' ? (
                <>
                  <img
                    src="https://phunugioi.com/wp-content/uploads/2020/04/anh-gai-xinh-2000-de-thuong.jpg"
                    alt="import-img"
                    className="image-import"
                  />
                  <img
                    src="https://soicauvn.com/wp-content/uploads/2020/04/20-hinh-anh-gai-xinh-toc-dai-dep-quyen-ru-va-de-thuong-nhat-1.jpg"
                    alt="import-img"
                    className="image-import"
                  />
                  {/* <img
                src="https://icapi.org/wp-content/uploads/2019/10/anh-gai-xinh-deo-kinh-1.jpg"
                alt="import-img"
                className="image-import"
              /> */}
                </>
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="create-post__footer create-post-modal">
            <label
              htmlFor="choose-image"
              className="choose-type-new-post"
              onClick={clickTypeImage}
            >
              <i className="fas fa-images"></i>
              Photo/Video
            </label>
            <input
              type="file"
              id="choose-image"
              onChange={(e) => handlePreviewImage(e)}
            />
            <button className="choose-type-new-post" onClick={clickTypePoll}>
              <i className="fas fa-poll create-poll" />
              Polls
            </button>
          </div>
        </Modal.Body>
        <Modal.Footer className="footer-create-post">
          <button type="submit" className="btn btn-primary submit-create-post">
            Post
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
