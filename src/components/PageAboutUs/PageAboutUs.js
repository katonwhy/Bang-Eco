import React from "react";
import HomeAboutUs from '../HomeAboutUs/HomeAboutUs';
import OurTeam from "../OurTeam/OurTeam";
import './PageAboutUs.css';

/*import Dp1 from '../../assets/Avatar1.png';
import Dp2 from '../../assets/Avatar2.png';
import Dp3 from '../../assets/Avatar3.png';
import Dp4 from '../../assets/Avatar4.png';
import Dp5 from '../../assets/Avatar5.png';*/
import Dp6 from '../../assets/Avatar6.png';

function PageAboutUs() {
    return (
        <div className="pageAboutUs">
            <HomeAboutUs />
            <div className="sosmed">
            <i class="fa-brands fa-facebook-square"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
            <div className='ourTeam'>
                <h1 className="heading">OUR TEAM</h1>
                <div className="groupCard">
                    <OurTeam img={Dp6} name='Masha' job='Project Manager' />
                    <OurTeam img={Dp6} name='Adji' job='UI Designer' />
                    <OurTeam img={Dp6} name='Katon' job='Data Engineer' />
                    <OurTeam img={Dp6} name='Yoghi' job='Web Developer' />
                    <OurTeam img={Dp6} name='Merlanda' job='QA Engineer' />
                </div>
            </div>
        </div>
    )
}

export default PageAboutUs;