import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './WebsiteNav.css';
import { Security, SecureRoute, ImplicitCallBack } from '@okta/okta-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from './Login'
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

import SignUp from './SignUp'

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

      <Router>
        <Security issuer={"https://dev-285096.okta.com/oauth2/default"}
          client_id="0oalswgsbB1cPi0Ha356"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}>

          <Route path="/login" exact={true} component={Login} />
          <Route path="/signup" exact={true} component={SignUp} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-285096.okta.com'/>}/>
          <Route path='/impicit/callback' component={ImplicitCallBack}/>
    
        </Security>

        <div>
        <Navbar className="NavBarEdit" light expand="md">


          <NavbarBrand href="/"><FontAwesomeIcon icon="stroopwafel" /> iiMage</NavbarBrand>


          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav pills className="ml-auto" navbar>

              <NavItem className="navItem">
              <Link to = "/">
                <NavLink className="NavItem" href="/" ><span className="navSpan">Home</span></NavLink>
                </Link>
              </NavItem>

              <NavItem>
                <Link to="/Explore">
                <NavLink className="Nv" href="/Explore" ><span className="navSpan">Explore</span></NavLink>
                </Link>
              </NavItem>


              <NavItem>
                <Link to ="/About">
                <NavLink href="/About"><span className="navSpan">About</span></NavLink>
                </Link>
              </NavItem>
              <Link to ="/Login">
              <MDBBtn href="/Login">Login</MDBBtn>
              </Link>
            </Nav>


          </Collapse>


        </Navbar>
      </div>
      </Router>
    );
  }
}