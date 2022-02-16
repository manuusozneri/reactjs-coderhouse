import React from 'react';
import './Hero.css';

const Hero = (props) => {
    console.log(props)
    return (
        <div className="main-text">
            <h1>{props.title}</h1>
        </div>
    );
};

export default Hero;