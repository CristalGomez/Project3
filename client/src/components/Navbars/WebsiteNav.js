import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './WebsiteNav.css';
import { Security, SecureRoute, ImplicitCallBack } from '@okta/okta-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/SignUp/SignUp'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


function onAuthRequired({history}){
  history.push('/login')
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      profile: this.clicked
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(props) {
    return (

      //these links will take you to called page
      //set them up so that this happens when specific btn is clicked


        <div>
        <Navbar className="NavBarEdit" light expand="md">
          <NavbarBrand href="/"><FontAwesomeIcon icon="stroopwafel" /> iiMage</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav pills className="ml-auto" navbar>
              <NavItem className="navItem">
                <NavLink className="NavItem" href="/" ><span className="navSpan">Home</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="Nv" href="/Explore" ><span className="navSpan">Explore</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/About"><span className="navSpan">About</span></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Login"><span className="navSpan">Login</span></NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
     

    );
  }
}