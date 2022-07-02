import React from 'react';
import NewsCard from "./NewsCard";
import "./News.css";

const Berita = () => {
    return (
        <div>
            <p id="info-donasi">Berita Terkini</p>
            <div className="card">
                <NewsCard/>
                <p className='link'>
                    <a href="/AllNews">Lihat Selengkapnya</a>
                </p>
            </div>
            
        </div>

        
    )
    
}

export default Berita;