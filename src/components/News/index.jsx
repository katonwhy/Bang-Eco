import React from 'react';
import NewsCard from "./NewsCard";
import "./News.css";

const Berita = () => {
    return (
        <div>
            <p id="info-news">Berita Terkini</p>
            <div className="card">
                <NewsCard/>
                <div className="btn-more-wrap">
                <a href="/AllNews"><button>Lihat Selengkapnya</button></a>
                </div>
            </div>
            
        </div>

        
    )
    
}

export default Berita;