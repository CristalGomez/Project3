import React from 'react';
import './CreatorNav.css';

// import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  } 
  filterFunc = (text) => {
    // if profile.mastery === "Beginner" {
    //   show
    // }
  } 

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => this.filterFunc('Beginner')}>Beginner Creator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  onClick={() => this.filterFunc('Intermediate')}>Intermediate Creator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.filterFunc('Advanced')}>Advanced Creator</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}