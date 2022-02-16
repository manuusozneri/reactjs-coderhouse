import React, {useState} from 'react'
import Modal from '../Modal/Modal'

const Item = () => {
    const [item] = useState([
        {
            id: 1,
            title: 'X',
            price: 40,
            description: 'lorem ipsum', 
            pictureUrl: 'http://example.com'
        }
    ]);
    const [showModal, setShowModal] = useState(false);
    function openModal () {
        setShowModal(prev => !prev)
        const promise = new Promise((resolve, reject) =>{
            const products = item
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
        <div className="button-wraper" /><div className="btn-info">
            {item.map(item => {
                return (
                    <div className="button-wraper">
                        <button onClick={openModal} key={item.id}>+ Info</button>
                    </div>
                );
            })}
        </div>
        <div className="modal">
            <Modal showModal={showModal} setShowModal={setShowModal}/>
        </div>
        </>
        
    )
} 

export default Item;
