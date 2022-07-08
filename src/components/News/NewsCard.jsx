import React from 'react';
import axios from 'axios';
import renderHTML from 'react-render-html';

import "./News.css";
import { MdChevronLeft, MdChevronRight} from 'react-icons/md';


class NewsCard extends React.Component {

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
    
        componentDidMount() {
            const wordPressSiteURL = 'https://bangeco.dezign.id';
            this.setState( { loading: true }, () =>{
                axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts?categories=4&per_page=5` )
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
            const slideNewsLeft =()=> {
                var slider = document.getElementById("sliderNews");
                slider.scrollLeft = slider.scrollLeft - 500;
        
            }
            const slideNewsRight = () => {
                var slider = document.getElementById("sliderNews");
                slider.scrollLeft = slider.scrollLeft + 500;
                
            }
            const { posts, error } = this.state;
            return (
                <React.Fragment>
                    { error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
                { posts.length ? (
                <div id="slider-container">   
                <MdChevronLeft size={40} className="slider-icon left" onClick ={slideNewsLeft}/>
                <div id="sliderNews">
                        { posts.map( post => (
                                <div className="slider-card" key={ post.id }>
                                <div className="card-image" style={{backgroundImage:`url(${post.better_featured_image.source_url})`}}> </div>
                               
                                <p className="title">{renderHTML( post.title.rendered )}</p>
                                
                                <p className="description">{renderHTML( post.excerpt.rendered )} </p>
                                <div className="btn-detail-wrap">
                                <a href={`/post/${post.id}`}>
                                    <button>Selengkapnya</button>
                                </a>
                                </div>
                            </div> 
                        ))}
                    </div>
                    <MdChevronRight size={40} className="slider-icon right" onClick = {slideNewsRight}/>
                    </div>
                ) :  ''}
            </React.Fragment>
            );
        }
}


export default NewsCard;