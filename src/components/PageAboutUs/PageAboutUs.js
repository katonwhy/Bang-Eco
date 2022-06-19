import React from "react";
import HomeAboutUs from '../HomeAboutUs/HomeAboutUs';
import OurTeam from "../OurTeam/OurTeam";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import Dp1 from '../../assets/Avatar1.png';
import Dp2 from '../../assets/Avatar2.png';
import Dp3 from '../../assets/Avatar3.png';
import Dp4 from '../../assets/Avatar4.png';
import Dp5 from '../../assets/Avatar5.png';

function PageAboutUs() {
    return (
        <div className="PageAboutUs">
            <HomeAboutUs />
            <div className="Sosmed">
            <FontAwesomeIcon icon={faCoffee} />
            </div>
            <div className='ourTeam'>
                <div className="heading">OUR TEAM</div>
                <div className="container justify-content-center mr-5">
                    <div className="row">
                    <div className='col-md-1'></div>
                    <div className='col-md-2'>
                        <OurTeam img={Dp1} name='Masha' job='Project Manager' />
                    </div>
                    <div className='col-md-2'>
                        <OurTeam img={Dp2} name='Merlanda' job='QA Engineer' />
                    </div>
                    <div className='col-md-2'>
                        <OurTeam img={Dp3} name='Yoghi' job='Web Developer' />
                    </div>
                    <div className='col-md-2'>
                        <OurTeam img={Dp4} name='Adji' job='UI Designer' />
                    </div>
                    <div className='col-md-2'>
                        <OurTeam img={Dp5} name='Katon' job='Data Engineer' />
                    </div>
                    <div className='col-md-1'></div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default PageAboutUs;