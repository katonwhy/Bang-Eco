import React from "react";
import './navbar.css';
import Logo from '../../AasetLogo/Logo-Recovered-shadow2.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <nav>
                <input id="nav-toggle" type="checkbox" />
                <div className="logo"><img src={Logo} alt='Logo' /></div>
                <ul className="links">
                    <li><a href="./">BERANDA</a></li>
                    <li><a href="./AllEdukasi">EDUKASI</a></li>
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
                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </label>
            </nav>
        </div>
    )
}
export default Navbar;