import React from "react";
import './ReqDonation.css';
import HeroReqDonation from '../../assets/HeroReqDonationPage.png';
import Box from '@mui/material/Box';
import {TextField, Button, Grid} from '@mui/material';

class ReqDonation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            org: '',
            contact: '',
            programName: '',
            programDesc: '',
            upload: ''
        }
    }

    handleUsernameChange = event => {
        this.setState({
            username: event.target.value
        })
    }
    
    handleOrgChange = event => {
        this.setState({
            org: event.target.value
        })
    }

    handleContactChange = event => {
        this.setState({
            contact: event.target.value
        })
    }

    handleProgramNameChange = event => {
        this.setState({
            programName: event.target.value
        })
    }

    handleProgramDescChange = event => {
        this.setState({
            programDesc: event.target.value
        })
    }

    handleUploadChange = event => {
        this.setState({
            upload: event.target.value
        })
    }

    handleSubmit = event => {
        alert('Apakah data yang anda masukkan sudah benar?');
        // event.preventDefault();
      }
    
    render() {
        return (
            <div className="container">
                <div className="heroReq">
                    <img src={HeroReqDonation} alt="hero" />
                </div>
                <Box
                onSubmit={this.handleSubmit}
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '470px', m: 2, justifyContents:'center' },
                }}
                style={{ maxWidth: 500, margin: '0 auto', marginBottom:'50px', backgroundColor: '#E1FFE3', padding:'20px 50px' }}
                noValidate
                autoComplete="off"
                >
                <h1 className="title">Ajukan Donasi</h1>
                <div>
                    <Grid container>
                        <Grid xs={12} item>
                            <TextField
                                required
                                name="username"
                                label="Nama"
                                value={this.state.username}
                                onChange={this.handleUsernameChange}
                                style={{backgroundColor:'white'}}
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                required
                                name="org"
                                label="Organisasi/Institusi"
                                value={this.state.org}
                                onChange={this.handleOrgChange}
                                style={{backgroundColor:'white'}}
                            /> 
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                required
                                name="contact"
                                label="No HP"
                                type="number"
                                value={this.state.contact}
                                onChange={this.handleContactChange}
                                style={{backgroundColor:'white'}}
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                required
                                name="programName"
                                label="Nama Program"
                                value={this.state.programName}
                                onChange={this.handleProgramNameChange}
                                style={{backgroundColor:'white'}}
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                multiline
                                required
                                name="programDesc"
                                label="Deskripsi Program"
                                value={this.state.programDesc}
                                onChange={this.handleProgramDescChange}
                                style={{backgroundColor:'white'}}
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <p>Upload Foto</p>
                            <TextField
                                required
                                name="upload"
                                label=""
                                type='file'
                                value={this.state.upload}
                                onChange={this.handleUploadChange}
                                style={{backgroundColor:'white'}}
                            />
                        </Grid>
                    </Grid>
                    <Button type='submit' variant="contained" color="success" style={{margin: '10px 15px'}}>Kirim</Button>
                </div>
            
                </Box>
            </div>
        );
    }
}

export default ReqDonation;