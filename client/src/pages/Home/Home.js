import React, { Component } from 'react';
import API from '../../utils/API';
import "./Home.css"
import Jumbotron from 'react-bootstrap/Jumbotron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Jumbo from '../../components/Jumbotron/Jumbo'
import { Container, Row, Col } from 'reactstrap';





class XPage extends Component {



  render() {
    return (
      <div >
        <Jumbo />
        <Container>
          <Row>
            {/* this one is missing xs=4 was playing with some stuff */}
            <Col xs="4" md={{span:3, offset:0}}>
            <FontAwesomeIcon className="icon" icon="stroopwafel" />
            <br/>
            <br/>
            <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>


            <Col xs="4" >
            <FontAwesomeIcon className="icon" icon="stroopwafel" />
            <br/>
            <br/>
            <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>


            <Col xs="4">
            <FontAwesomeIcon className="icon" icon="stroopwafel" />
            <br/>
            <br/>
            <p className="paragraph">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </Col>

          </Row>
        </Container>
          
        


      </div>


    )
  }
}

export default XPage;
