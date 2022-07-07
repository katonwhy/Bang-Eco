import React from "react";
import './PageDetailDonasi.css';
import AboutUs from '../../assets/Hero/HeroReqDonationPage.png';
// import AboutUss from '../../assets/AboutUs.png';

// import { Button } from '@mui/material';

const DetailDonasi = () => {
    return (
        <div className="detailDonasi">
            <div className="detailDonasiFoto">
                <img src={AboutUs} alt='Logo'/>
            </div>
            <div className="detailDonasiDesk">
                <h1>Program</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/><br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="detailDonasiAlamat">
                <h1>Donasikan Barangmu disini</h1>
                <p>Jl. Lorem Ipsum Dolor Sit Amet, Lorem, Ipsum, Indonesia <br/> CP: 088888888 </p>
                <button class="button">Kunjungi Maps</button>
                {/* <Button type='submit' variant="contained" color="success" style={{margin: '10px 15px'}}>Kunjungi Maps</Button> */}
            </div>
            <div className="detailDonasiRekening">
                <h1>Atau</h1>
                <fieldset>
                    {/* <legend><img src={AboutUss} alt='Logo'/></legend> */}
                    <legend>BNI</legend>
                    <p>Text<br/>Text</p>
                </fieldset>
            </div>
            
            
        </div>
    )
}

export default DetailDonasi;