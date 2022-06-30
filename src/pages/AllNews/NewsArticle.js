import React from "react";
import "./AllNews.css"


const AllNewsCard = ({images, author,title,description })=>{
   
    return(
       
        <div className="all-donation-card">
            
            <div className="card-wrap">
                    <div className="images">
                        <img src={images} alt={title} />
                    </div>
                    <p className="author">{author}</p>
                    <p className="title">{title}</p>
                    <p className="description">{description}</p>
                    <div className="btn-detail-wrap">
                        <button>Detail Lainnya</button>
                    </div>
            </div>
            
                                
        </div>
    );
};

export default AllNewsCard;