import React, { useState } from 'react';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ImageView() {

  let { indexImage } = useParams()

  const history = useHistory()

  const [modalIsOpen, setModalIsOpen] = useState(true)

  const {user} = useSelector(state => state.homeReducer)

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen)
    history.push(`/profile/${user.id}`)
  }

  const images = [
    { source: 'https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg' },
    { source: 'https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg' },
    { source: 'https://soicauvn.com/wp-content/uploads/2020/04/20-hinh-anh-gai-xinh-toc-dai-dep-quyen-ru-va-de-thuong-nhat-1.jpg' },
    { source: 'https://2.bp.blogspot.com/-fjf5yU5r1Jk/WE1VD1BBKpI/AAAAAAAAjgI/bXwGoigAPJYvScMPtzJtzbOJfoGQO2C_ACEw/s1600/15349541_533868826819201_3350340522319981193_n.jpg' },
    { source: 'https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg' },
    { source: 'https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg' },
    { source: 'https://sohanews.sohacdn.com/2020/2/26/photo-1-158270587240769675748.jpg' },
    { source: 'https://thuthuatnhanh.com/wp-content/uploads/2019/07/anh-girl-xinh-facebook-tuyet-dep-387x580.jpg' },
  ];

  return (
    <ModalGateway>
      {modalIsOpen ? (
        <Modal onClose={toggleModal}>
          <Carousel views={images} currentIndex={indexImage}/>
        </Modal>
      ) : null}
    </ModalGateway>
  )
}