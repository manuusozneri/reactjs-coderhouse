import React from 'react';
import './ItemCount.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initialValue: 1,
        }
    }
    increment = () => {
        this.setState({
            initialValue: this.state.initialValue + 1
        })
    }
    decrement = () => {
        this.setState({
            initialValue: this.state.initialValue - 1
        })
    }
    render() {
        return(
            <div className="cart">
                <h2>Producto</h2>
                <h3>{this.state.initialValue}</h3>
                <div className="button-wrapper">
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
    
}
        

        
    
    

export default Counter;





