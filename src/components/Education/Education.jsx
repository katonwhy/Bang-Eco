import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import renderHTML from 'react-render-html';
// import Moment from 'react-moment';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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

    componentDidMount() {
        const wordPressSiteURL = 'https://bangeco.dezign.id';
        this.setState( { loading: true }, () =>{
            axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts` )
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
        // console.warn ( 'state', this.state)
        const { posts, error } = this.state;
        return (
            <React.Fragment>
                { posts.length ? (
                    <>
                        { posts.map( post => (
                            <Card key={ post.id } sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={post.better_featured_image.source_url}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        {renderHTML( post.title.rendered )}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {renderHTML( post.excerpt.rendered )} 
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Selengkapnya</Button>
                                    </CardActions>
                            </Card> 
                        ))}
                    </>
                ) :  ''}
            </React.Fragment>
        );
    }
}
 
export default Education;