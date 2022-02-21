import React, {useState} from 'react';
import './Hero.css';
import { ArrowForward, ArrowRight, VideoBg } from './HeroElements';
import {Button} from '../ButtonElement.js'
import Video from '../../Video/video.mp4';



const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }
    
    return (
        <>
            <div className="HeroContainer" id="hero">
                <div className="HeroBg">
                    <VideoBg autoPlay loop muted src={Video}/>
                </div>
                <div className="HeroContent">
                    <h1 className="HeroH1">Comprar de manera virtual nunca fue tan fácil</h1>
                    <p className="HeroP">Crea tu cuenta para obtener un 20% off en todos nuestros productos</p>
                    <div className="HeroBtnWrapper">
                        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>Get Started {hover ? <ArrowForward/>:<ArrowRight/>}</Button>
                    </div>
                </div>
                
            </div>
        
        </>
        

            

           
                
            
            
        
    );
};

export default HeroSection;