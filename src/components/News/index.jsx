import NewsCard from "./NewsCard";
import "./News.css";

const Berita = () => {
    return (
        <div>
            <p id="info-donasi">Berita Terkini</p>
            <div className="card">
                <NewsCard/>
            </div>
        </div>

        
    )
    
}


export default Berita;