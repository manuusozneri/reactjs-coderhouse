import React from 'react';
import './ItemCount.css';

const ItemCount = (props) => {
    const [setCount] = React.useState(this.props.initial);
        return(
            <div className="cart">
                <h2>Producto</h2>
                <h3>{props.initial}</h3>
                <div className="button-wrapper">
                    <button onClick={() => setCount(this.props.initial - 1)}>-</button>
                    <button onClick={() => setCount(this.props.initial + 1)}>+</button>
                </div>
            </div>
        )
}
        
    
    

export default ItemCount;





