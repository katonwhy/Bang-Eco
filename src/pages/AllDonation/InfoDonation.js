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
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

class DonationArticle extends React.Component {
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
            axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts?categories=6` )
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
                { error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
                { posts.length ? (
                <Box sx={{ flexGrow: 1 }}>
                   <Grid container spacing={2}>
                        { posts.map( post => (
                            <Grid item xs={4}>
                                {/* <Card key={ post.id } sx={{ maxWidth: 345 }}> */}
                                <Card key={ post.id }>
                                    <CardMedia
                                    component="img"
                                    height="140"
                                    image={post.better_featured_image.source_url}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5">
                                    <a href={`/post/${post.id}`}>
                                        {renderHTML( post.title.rendered )}
                                    </a>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {renderHTML( post.excerpt.rendered )} 
                                    </Typography>
                                    </CardContent>
                                    <CardActions>
                                    <a href={`/post/${post.id}`}>
                                        <Button size="small">Selengkapnya</Button>
                                    </a>
                                    </CardActions>
                            </Card> 
                            </Grid>
                        ))}
                    </Grid>
                    </Box>
                       
          
                ) :  ''}
            </React.Fragment>
        );
    }
}
 
export default DonationArticle;