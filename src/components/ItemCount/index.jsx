import React from 'react';
import './ItemCount.css';
import {ItemList} from './ItemList.js';



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
    
    function promise() {
        const promise = new Promise((resolve, reject) =>{
            const products = ItemList[0]
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
                    <button className="btn-info" onClick={promise}>
                        + Info
                    </button>
                    
                </div>
                <h4>Stock: {props.stock}</h4>
            </div>
        )
}

    
    
    

        

        
    
    

export default Counter;





