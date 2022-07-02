import React from "react";
import './HomeAboutUs.css';
import AboutUs from '../../assets/AboutUs.png';

const HomeAboutUs = () => {
    return (
        <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>Tentang Kami</h1>
				</div>
				<div class="content">
					<p>Bang Eco adalah sebuah website yang bertujuan untuk memberikan edukasi tentang pengelolaan sampah dengan baik dan informasi terkini seputar sampah kepada masyarakat. Mulai dari edukasi mengenai cara pemisahan limbah atau sampah yang reusable dan zero waste, cara penerapan zero waste lifestyle hingga dampak-dampak positif dan negatif yang akan diterima kita sebagai manusia dan lingkungan.</p>
				</div>
				<div class="social">
                    <a href='https://www.facebook.com/'><i class="fa-brands fa-facebook-square"></i></a>
                    <a href='https://www.twitter.com/'><i class="fa-brands fa-twitter"></i></a>
                    <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
                    <a href='https://www.linkedin.com/'><i class="fa-brands fa-linkedin"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src={AboutUs} alt='aboutus'/>
			</div>
		</div>
	</div>
    )
}

export default HomeAboutUs;