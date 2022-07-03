import React from 'react';
import CardSlider from "./card";
import "./slider.css";

const InfoDonasi = () => {
    return (
        <div>
            <p id="info-donasi">Informasi Donasi</p>
            <div className="card">
                <CardSlider/>
                <div className="btn-more-wrap">
                <a href="/AllDonationPage"><button>Lihat Selengkapnya</button></a>
                </div>
            </div>
        </div>

        
    )
    
}


export default InfoDonasi;