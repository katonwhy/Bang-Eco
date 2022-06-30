import React from "react";
import "./AllDonation.css"


const DonationCard = ({images, organization,title,description })=>{
   
    return(
       
        <div className="all-donation-card">
            
            <div className="card-wrap">
                    <div className="images">
                        <img src={images} alt={title} />
                    </div>
                    <p className="organization">{organization}</p>
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <div className="btn-detail-wrap">
                        <button>Detail Lainnya</button>
                    </div>
            </div>
            
                                
        </div>
    );
};

export default DonationCard;