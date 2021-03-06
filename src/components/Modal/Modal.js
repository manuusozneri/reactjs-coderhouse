import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'
import {Item} from '../ItemCount/Item'

const Background = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center; 
    z-index: 1; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.8);
    overflow: auto;
`;

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  button:hover{
    background-color:#3ca854;
    transition: 500ms;
  }
`;
const ModalImg = styled.img`
    position: relative;
    margin-left: 20px;
    width: 100%;
    height: 86%;
    border-radius: 10px 10px 10px 10px;
`;
const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal}) => {
    return (
        <>
          {showModal ? (
            <Background >
                <ModalWrapper showModal={showModal}>
                  <ModalImg src={require('./ModalPhoto.jpg')} alt='camera' />
                    {Item.map(Item => {
                        return(
                            <>
                            <ModalContent key={Item.id}>
                                <h1>{Item.title}</h1>
                                <h3>{Item.price}</h3>
                                <h4>{Item.description}</h4>
                                <button>Buy Now</button>
                            </ModalContent>
                            </>
                        ) 
                    })}
                  <CloseModalButton
                    aria-label='Close modal'
                    onClick={() => setShowModal(prev => !prev)}
                  />
                </ModalWrapper>
            </Background>
          ) : null}
        </>
      );
}







export default Modal;