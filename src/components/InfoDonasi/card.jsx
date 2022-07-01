import React from "react";
import "./slider.css";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';


const CardSlider = (props) => {
    //untuk membuat jumlah card
    const slides = [
        {
            images:'https://picsum.photos/200/300',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/400/300',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/200/400',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/200/500',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/500/400',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/200/100',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/300/700',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/200/900',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/300/800',
            organization: "Organization Name",
            title: "Card Title",
            description: "Lorem ipsum dolor sit amet"
        },


    ];

    const slideLeft =()=> {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;

    }

    const slideRight = () => {
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
        
    }
    
    return(
        <div id="slider-container">
           
            <MdChevronLeft size={40} className="slider-icon left" onClick ={slideLeft}/>
            <div id="slider">
               {
                //untuk mapping jumlah card
                slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index}>
                                <div className="card-image" style={{backgroundImage:`url(${slide.images})`}}> </div>
                                <p className="organization">{slide.organization}</p>
                                <p className="title">{slide.title}</p>
                                <p className="description">{slide.description}</p>
                                <div className="btn-detail-wrap">
                                    <button>Detail Lainnya</button>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick = {slideRight}/>
        </div>
    )
}

export default CardSlider;