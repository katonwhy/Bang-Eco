import React from "react";
import HomeAboutUs from '../HomeAboutUs/HomeAboutUs';
import OurTeam from "../OurTeam/OurTeam";
import './PageAboutUs.css';

import Dp1 from '../../assets/Avatar1.png';
import Dp2 from '../../assets/Avatar2.jpeg';
import Dp3 from '../../assets/Avatar3.jpg';
import Dp4 from '../../assets/Avatar4.png';
import Dp5 from '../../assets/Avatar5.jpeg';

function PageAboutUs() {
    return (
        <div className="pageAboutUs">
            <HomeAboutUs />
            <div className='ourTeam'>
                <h1 className="heading">OUR TEAM</h1>
                <div className="groupCard">
                    <OurTeam img={Dp1} name='Masha' job='Project Manager' />
                    <OurTeam img={Dp2} name='Adji' job='UI Designer' />
                    <OurTeam img={Dp3} name='Katon' job='Data Engineer' />
                    <OurTeam img={Dp4} name='Yoghi' job='Web Developer' />
                    <OurTeam img={Dp5} name='Merlanda' job='QA Engineer' />
                </div>
            </div>
        </div>
    )
}

export default PageAboutUs;