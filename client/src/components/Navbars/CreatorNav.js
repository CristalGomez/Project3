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

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => this.props.filterHandler("All")}>Show All</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.props.filterHandler("Beginner")}>Beginner Creator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink  onClick={() => this.props.filterHandler("Intermediate")}>Intermediate Creator</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.props.filterHandler("Advanced")}>Advanced Creator</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}