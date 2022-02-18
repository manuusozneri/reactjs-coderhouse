import React from 'react';
import './ItemList.css';
import MoreInfo from '../ItemCount/MoreInfo';



const array = [
    {
        id: 1,
        title: 'Product X',
        price: 40,
        description: 'lorem ipsum',  
        pictureUrl: 'http://example.com'
    },
    {
        id: 2,
        title: 'Product Y',
        price: 90, 
        description: 'lorem ipsum', 
        pictureUrl: 'http://example.com'
    },
    {
        id: 3,
        title: 'Product Z',
        price: 20, 
        description: 'lorem ipsum', 
        pictureUrl: 'http://example.com'
    },
    {
        id: 4,
        title: 'Product ZA',
        price: 45, 
        description: 'lorem ipsum', 
        pictureUrl: 'http://example.com'
    },
    
]

const RenderItems = (props) => {
    var stock = props.stock 
    
    const [count, setCount] = React.useState(1);
    const incValues = () => {
        if(count >= stock ) {
            <button>+</button>
        } else{
            setCount(count + 1);
        }
        
    }
    const decValues = () => {
        if (count > 1){
            setCount(count - 1)
        } else {
            <button>-</button>
        }
    }
    const onAdd = () => {
        alert(count + " items added");
    }
    
    
    
    return array.map((item) => (
            <div className="row">
                <div className="cart-holder">
                <h2>{item.title}</h2>
                <img src={props.imagen} alt={props.alt}></img>
                <h3>{count}</h3>
                <div className="button-wrapper">
                    <button onClick={decValues}>-</button>
                    <button onClick={onAdd}>Add to Cart</button>
                    <button onClick={incValues}>+</button>
                </div>
                <div className="button-wrapper">
                    <MoreInfo />
                </div>
                <h4>Stock: {props.stock}</h4>
                </div>
            </div>
            
    ));
        
    
    
}

export default RenderItems