import React from "react";
import './navbar.css';
import Logo from '../../AasetLogo/Logo-Recovered-shadow2.png';

const navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <input id="nav-toggle" type="checkbox" />
                <div class="logo"><img src={Logo} alt='Logo' /></div>
                <ul class="links">
                    <li><a href="./">BERANDA</a></li>
                    <li><a href="#about">EDUKASI</a></li>
                    <li><a href="./AllNews">BERITA</a></li>
                    <div className="dropdown">
                        <button className="dropbtn">DONASI
                            <i className="fa fa-caret-down"></i>
                        </button>
                        <div className="dropdown-content">
                            <li><a href="./ReqDonation">Ajukan Donasi</a></li>
                            <li><a href="./AllDonationPage">Data Donasi</a></li>
                        </div>
                    </div>
                    <li><a href="./PageAboutUs">TENTANG KAMI</a></li>
                </ul>
                <label for="nav-toggle" class="icon-burger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </label>
            </nav>
        </div>
    )
}
export default navbar;