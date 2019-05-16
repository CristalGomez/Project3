import React, { Component } from "react";
import { storage } from "../../firebase"
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "./ImageUpload.css"

class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0,
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }))
        }
    }
    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progress function
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                this.setState({ progress })
            },
            (error) => {
                // error function
                console.log(error);
            },
            () => {
                // complete function
                storage.ref('images').child(image.name).getDownloadURL().then(url => {
                    console.log(url);
                    this.setState({ url });
                })
            });
    }
    render() {
        return (
            // const style = {
            //     height: '100vh',

            // }
            <div>
                {/* <progress value={this.state.progress} max='100' />
                <br />
                <input type='file' onChange={this.handleChange} />
                <button onClick={this.handleUpload}>Upload</button>
                <br />
                <img src={this.state.url || 'https://via.placeholder.com/300x150'} alt='uploaded images' height='300' width='400' /> */}
                <Container>
                    <Row>
                        <Col xs='6'>
                            
                            <input className="fileInput" type='file' onChange={this.handleChange} />
                            <br/>
                            <MDBBtn className="uploadBtn" onClick={this.handleUpload}>Upload</MDBBtn>
                            <progress className="progressBar w3-grey" value={this.state.progress} max='100' />
                            {/* <button className="uploadBtn" onClick={this.handleUpload}>Upload</button> */}
                            <br />
                            <img src={this.state.url || 'https://via.placeholder.com/300x150'} alt='uploaded images' height='300' width='400' />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ImageUpload;