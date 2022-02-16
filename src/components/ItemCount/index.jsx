import React from 'react';
import './ItemCount.css';
import MoreInfo from './MoreInfo.js';



const Counter = (props) => {
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
    
    
    
    return(
            <div className="cart">
                <h2>Producto</h2>
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
    )
}

    
    
    

        

        
    
    

export default Counter;





