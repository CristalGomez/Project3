import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './WebsiteNav.css';
import { Security, SecureRoute, ImplicitCallBack } from '@okta/okta-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from './Login'

// import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

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
      <Router>
        <Security issuer={"https://dev-285096.okta.com/oauth2/default"}
          client_id="0oalswgsbB1cPi0Ha356"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
          <Route path="/login" exact={true} component={Login} />
          <Route path="/signup" exact={true} component={SignUp} />
          <Route path='/ligin' render={() => <Login baseUrl='https://dev-285096.okta.com'/>}/>
          <Route path='/impicit/callback' component={ImplicitCallBack}/>

        </Security>
      </Router>
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
              <MDBBtn href="/Login">Login</MDBBtn>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}