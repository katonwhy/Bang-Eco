import React from "react";
import './OurTeam.css';

const OurTeam = (props) => {
    return (
        <div className="ourTeamCard">
            <img src={props.img} alt='avatar' />
            <h2>{props.name}</h2>
            <p>{props.job}</p>
        </div>
    )
}

export default OurTeam;