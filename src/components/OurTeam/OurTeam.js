import React from "react";
import './OurTeam.css';
/*import Card from 'react-bootstrap/Card';*/

function OurTeam(props) {
    return (
            /*<div className="ourTeamCard">
                <Card style={{ width: '15rem', height: '26rem', lineHeight: '20px' }}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body style={{ }}>
                        <Card.Title style={{ textAlign: 'center', fontSize: '22px', fontWeight: '600', color: '#002F05' }}>{props.name}</Card.Title>
                        <Card.Text style={{ textAlign: 'center', fontSize: '15px', fontWeight: '500', color: '#002F05' }}>{props.job}</Card.Text>
                    </Card.Body>
                </Card>
            </div>*/
        <div className="ourTeamCard">
            <img src={props.img} alt='avatar' />
            <h2>{props.name}</h2>
            <p>{props.job}</p>
        </div>
    )
}

export default OurTeam;