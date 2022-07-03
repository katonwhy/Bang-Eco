import React from "react";
import './index.css';
import Hero2 from '../../assets/Hero2.png';

const Hero = () => {
    return (
        <div className="hero">
            <img src={Hero2} alt='HeroImage' />
            <div className="heroText">
                <h1>Mari menjaga lingkungan<br/>dengan mengolah sampah anda!</h1>
            </div>
        </div>
    )    
}

export default Hero;