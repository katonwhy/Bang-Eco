import React from 'react';
import renderHTML from "react-render-html";
import axios from "axios";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Berita from './News'

class SinglePost extends React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			loading : false,
			post: {},
			error: ''
		};
	}

	createMarkup = ( data ) => ({
		__html: data
	});

	componentDidMount() {
        const wordPressSiteURL = 'https://bangeco.dezign.id';
        // console.warn( this.props.match.params.id );
		this.setState( { loading: true }, () => {
			axios.get( `${wordPressSiteURL}/wp-json/wp/v2/posts/${this.props.match.params.id}` )
				.then( res => {

					if ( Object.keys( res.data ).length ) {
						this.setState( { loading: false, post: res.data } );
					} else {
						this.setState( { loading: false, error: 'No Posts Found' } );
					}
				} )
				.catch( err => this.setState( { loading: false, error: err.response.data.message } ) );
		} )
	}

	render() {
	
		const { post, error } = this.state;

		return(
			<React.Fragment>
				
				{ error && <div className="alert alert-danger" dangerouslySetInnerHTML={ this.createMarkup( error ) }/> }
				{ Object.keys( post ).length ? (

                    <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                    <Grid item xs={12}>
                                {/* <Card key={ post.id } sx={{ maxWidth: 345 }}> */}
                                <Card key={ post.id }>
                                    <CardMedia
                                    component="img"
                                    image={post.better_featured_image.source_url}
									style={{width: '50%', height: '200px'}}
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h3"
									style={{margin: '80px auto', fontSize: 34}}
									>
                     
                                        {renderHTML( post.title.rendered )}
                  
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {renderHTML( post.content.rendered )} 
                                    </Typography>
                                    </CardContent>
                            </Card> 
                            </Grid>
                    </Grid>
					<Berita/>
                    </Box>
					
				) : '' }
			</React.Fragment>
		)
	}
}

export default SinglePost;