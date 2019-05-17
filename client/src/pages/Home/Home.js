import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { DefaultButton, XComponentTwo } from '../../components/Button'
// import Carousel from 'react-bootstrap/Carousel'
// import { Container } from 'mdbreact';
import { Container, Row, Col } from 'reactstrap';
import CarouselHome from "../../components/Carousel/Carousel"
import "./Home.css"
import { FaImages } from "react-icons/fa";
// import { HelloWorld } from 'component-template';

import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { checkPropTypes } from 'prop-types';
// import anime from 'lib/anime.es.js';
// import posed from 'react-pose';




class XPage extends Component {



  render() {
    return (
      <div className='fu' >
        <Jumbotron>
          <br/>
          <br/>
          <br/>
          <br/>
          <h1><FontAwesomeIcon icon="stroopwafel" /> iiMage</h1>
          <p>
          Each photo you take represents a split-second in time that can never be recaptured. That photo has the potential to shape memories for generations to come.
  </p>
          <p>
          <MDBBtn href="/Login"><span className="loginbutton">Sign Up</span></MDBBtn>
          </p>
          
          <br/>
          <br/>
          <br/>
     
        </Jumbotron>;
      </div>


    )
  }
}

export default XPage;
