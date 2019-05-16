import React from 'react';
import {Router, Link} from 'react-router-dom';
import './WebsiteNav.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      profile : this.clicked
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render(props) {
    return (
      <div>
        <Navbar  className="NavBarEdit" light expand="md">
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








// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
// const XNav = (props) => (
//   // <span className="XNavClass" {...props}>
//   //   XNav
//   // </span>

//   <div>
//     <AppBar position="static">
//       <Toolbar>
//         <IconButton className='' color="inherit" aria-label="Menu">
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" color="inherit" className='TitleName'>
//           iimage
//           </Typography>
//         <Button color="inherit" className="LoginButton">Login</Button>
//       </Toolbar>
//     </AppBar>
//   </div>

// );

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };


// export { XNav };


// import React from 'react';
// import PropTypes from 'prop-types';
// import { XNav } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// function XNav(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//             iimage
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// // ButtonAppBar.propTypes = {
// //   classes: PropTypes.object.isRequired,
// // };

// export default {XNav}(styles);