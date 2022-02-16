import React, {useState} from 'react'
import Modal from '../Modal/Modal'
import {Item} from './Item'

const MoreInfo = () => {
    const [showModal, setShowModal] = useState(false);
    function openModal () {
        setShowModal(prev => !prev)
        const promise = new Promise((resolve, reject) =>{
            const products = Item
            resolve(products)
        })
        promise.then(result => {
            setTimeout(() => {
                console.log(result)
                return result
            }, 2000)
        }, error =>{
            console.log('Error:' , error)
        })
    }
    return (
        <>
        <div className="button-wraper" />
            <div className="button-wraper">
                <button onClick={openModal}>+ Info</button>
            </div>
        <div className="modal">
            <Modal showModal={showModal} setShowModal={setShowModal}/>
        </div>
        </>
    )
} 

export default MoreInfo;
