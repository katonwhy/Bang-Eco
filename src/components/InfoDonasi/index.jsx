import React from 'react';
import CardSlider from "./card";
import "./slider.css";

const InfoDonasi = () => {
    return (
        <div>
            <p id="info-donasi">Informasi Donasi</p>
            <div className="card">
                <CardSlider/>
                <p className='link'>
                    <a href="/AllDonationPage">Lihat Selengkapnya</a>
                </p>
            </div>
        </div>

        
    )
    
}


export default InfoDonasi;