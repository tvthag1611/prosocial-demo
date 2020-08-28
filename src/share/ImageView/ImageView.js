import React, { useState } from 'react'
import styled from 'styled-components'

import { Modal } from 'react-bootstrap'
import { Icon } from 'tabler-react'

import './ImageView.css'

export const ImageView = ({ src, circleBorder = false }) => {
  const [showing, setShowing] = useState(false)
  return (
    <Wrapper>
      <Img
        className='card-img-top'
        src={src}
        onClick={() => setShowing(true)}
        circleBorder={circleBorder}
      />
      <Modal show={showing} onHide={() => setShowing(false)} size='lg'>
        <Modal.Header>
          <CloseButton className='btn-modal' onClick={() => setShowing(false)}>
            <Icon prefix='fe' name={'x'} />
          </CloseButton>
        </Modal.Header>
        <Modal.Body>
          <img src={src} />
        </Modal.Body>
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
`

const Img = styled.img`
  max-width: 150px;
  max-height: 150px;
  border: solid 2px white;
  border-radius: ${props => (props.circleBorder ? '50%' : '0')};
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`
