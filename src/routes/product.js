import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import VideoHero from '../components/VideoBackground/VideoHero';
import Counter from '../components/ItemCount';

const Productos = () => {
    return(
        <>
            <Navbar/>
            <VideoHero heading="Productos" text="Elegi tus productos"/>
            <Counter stock="4" imagen="https://via.placeholder.com/150" alt="placeholder"/>
            <Footer/>
        </>
    )
}

export default Productos