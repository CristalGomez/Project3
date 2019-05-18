import React from 'react';
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import './WebsiteNav.css';
import { Security, SecureRoute, ImplicitCallBack } from '@okta/okta-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Login from '../../pages/Login/Login'
import SignUp from '../../pages/SignUp/SignUp'
import profiles from '../../pages/Explore/profiles';
import { MDBBtn } from 'mdbreact';


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


function onAuthRequired({ history }) {
  history.push('/login')
}

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      profile: this.clicked
    };
  }
  componentDidMount() {
    console.log("component mounted one time")
  }

  componentDidUpdate(prevProps, prevState) {
    //some kind of navbar collapse in state
    //be careful because when you expand, this function will fire
    //you can infinitely accidentally close the nav
    // this.setState({  BAD!!
    //   isOpen: false
    // })
    if (prevState.isOpen) {
      this.setState({ 
        isOpen: false
      })
    }
    console.log("A prop or state change occurred.")
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (

      //these links will take you to called page
      //set them up so that this happens when specific btn is clicked
      <Router>
        <div>

          <Security issuer={"https://dev-285096.okta.com/oauth2/default"}
            client_id="0oalswgsbB1cPi0Ha356"
            redirect_uri={window.location.origin + '/implicit/callback'}
            onAuthRequired={onAuthRequired}>
            {/* 
          <Route path="/login" exact={true} component={Login} />
          <Route path="/signup" exact={true} component={SignUp} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-285096.okta.com'/>}/>
          <Route path='/impicit/callback' component={ImplicitCallBack}/> */}

          </Security>

          <div>

            <Navbar className="NavBarEdit" light expand="md">
              <NavbarBrand href="/"><FontAwesomeIcon icon="stroopwafel" /> iiMage</NavbarBrand>
              {profiles[this.props.location.pathname.split("/")[2] - 1] ? <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}><img className="pfpImage" src={profiles[this.props.location.pathname.split("/")[2] - 1].profile} /></div> : null}
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav pills className="ml-auto" navbar>
                  <NavItem className="navItem">
                    {/* <Link to="/"><NavLink className="NavItem" href="/"><span className="navSpan">Home</span></NavLink></Link> */}
                    <NavLink onClick={() => this.props.history.push('/')}>Home</NavLink>
                  </NavItem>
                  <NavItem>
                    {/* <Link onClick={() => this.props.history.push('/Explore')} to="/Explore">Explore</Link>> */}
                    <NavLink onClick={() => this.props.history.push('/Explore')}>Explore</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => this.props.history.push('/About')}>About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink onClick={() => this.props.history.push('/Login')}>Login</NavLink>
                  </NavItem>

                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </div>
      </Router>

    );
  }
}

export default withRouter(Example);
