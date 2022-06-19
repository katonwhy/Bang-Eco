import React from "react";
import './HomeAboutUs.css';
import AboutUs from '../../assets/AboutUs.png';

const HomeAboutUs = () => {
    return (
        <div className="aboutUsHome">
            <div className="text">
                <h1>Tentang Kami</h1>
                <p>Bang Eco adalah sebuah website yang bertujuan untuk memberikan edukasi tentang pengelolaan sampah dengan baik dan informasi terkini seputar sampah kepada masyarakat. Mulai dari edukasi mengenai cara pemisahan limbah atau sampah yang reusable dan zero waste, cara penerapan zero waste lifestyle hingga dampak-dampak positif dan negatif yang akan diterima kita sebagai manusia dan lingkungan.</p>
            </div>
            <div className="aboutUsLogo">
                <img src={AboutUs} alt='Logo'/>
            </div>
        </div>
    )
}

export default HomeAboutUs;