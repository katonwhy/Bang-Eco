import React from 'react';
import CardSlider from "./card";
import "./Slider.css";

const InfoDonasi = () => {
    return (
        <div>
            <p id="info-edukasi">Informasi Donasi</p>
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