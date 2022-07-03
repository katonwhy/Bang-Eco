import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import renderHTML from 'react-render-html';

import "./Education.css";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';

class Education extends React.Component {
    // state = {  } 

    constructor( props ) {
        super( props );
    
        this.state = {
            loading:false,
            posts: [],
            error: ''
        }
    }
    
    createMarkup = ( data ) => ({
        __html: data
    });
    
    // https://bangeco.dezign.id/wp-json/wp/v2/posts?categories=3&per_page=5
    
        componentDidMount() {
            const wordPressSiteURL = 'https://bangeco.dezign.id';
            this.setState( { loading: true }, () =>{
                axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts?categories=3&per_page=5` )
                .then( res => {
                    if ( 200 === res.status ) {
                        if ( res.data.length ) {
                            this.setState( { loading: false, posts: res.data } );
                            console.warn (res.data);
                        } else {
                            this.setState( { loading: false, error: 'No Posts Found' } );
                        }
                    }
    
                } )
                .catch( err => this.setState( { loading: false, error: err } ) );
        } )
    }

        render() { 
            const slideLeft =()=> {
                var slider = document.getElementById("slider");
                slider.scrollLeft = slider.scrollLeft - 500;
        
            }
            const slideRight = () => {
                var slider = document.getElementById("slider");
                slider.scrollLeft = slider.scrollLeft + 500;
                
            }
            const { posts, error } = this.state;
            return (
                <React.Fragment>
                <p id="info-donasi">Edukasi</p>
                { posts.length ? (
                <div id="slider-container">   
                <MdChevronLeft size={40} className="slider-icon left" onClick ={slideLeft}/>
                <div id="slider">
                        { posts.map( post => (
                                <div className="slider-card" key={ post.id }>
                                   <div className="card-image" style={{backgroundImage:`url(${post.better_featured_image.source_url})`}}> </div>
                                <Link to={`/post/${post.id}`}>
                                <p className="title">{renderHTML( post.title.rendered )}</p>
                                </Link>
                                <p className="description">{renderHTML( post.excerpt.rendered )} </p>
                                <Link to={`/post/${post.id}`}>
                                <div className="btn-detail-wrap">
                                    <button>Selengkapnya</button>
                                </div>
                                </Link>
                            </div> 
                        ))}
                    </div>
                    <MdChevronRight size={40} className="slider-icon right" onClick = {slideRight}/>
                    </div>

                ) :  ''}
                                    <div className="btn-more-wrap">
                    <a href="/AllEdukasi"><button>Lihat Selengkapnya</button></a>
                    </div>
            </React.Fragment>
            );
        }
}
 
export default Education;