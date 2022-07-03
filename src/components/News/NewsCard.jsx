import React from "react";
import "./News.css";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';


const NewsCard = (props) => {
    //untuk membuat jumlah card
    const slides = [
        {
            images:'https://picsum.photos/100/450',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/410/320',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/220/415',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/210/510',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/515/421',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/211/111',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/322/722',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/233/933',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },
        {
            images:'https://picsum.photos/344/844',
            author: "News Author",
            title: "News Title",
            description: "Lorem ipsum dolor sit amet"
        },


    ];

    const newsLeft =()=> {
        var slider = document.getElementById("newsSlider");
        slider.scrollLeft = slider.scrollLeft - 500;

    }

    const newsRight = () => {
        var slider = document.getElementById("newsSlider");
        slider.scrollLeft = slider.scrollLeft + 500;
        
    }
    
    return(
        <div id="slider-container">
           
            <MdChevronLeft size={40} className="slider-icon left" onClick ={newsLeft}/>
            <div id="newsSlider">
               {
                //untuk mapping jumlah card
                slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index}>
                                <div className="card-image" style={{backgroundImage:`url(${slide.images})`}}> </div>
                                <p className="organization">{slide.author}</p>
                                <p className="title">{slide.title}</p>
                                <p className="description">{slide.description}</p>
                                <div className="btn-detail-wrap">
                                    <a href="/DetailDonationPage"><button>Detail Lainnya</button></a>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick = {newsRight}/>
        </div>
    )
}

export default NewsCard;