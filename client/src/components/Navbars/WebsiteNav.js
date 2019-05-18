import React from 'react';
import {Router, Link, withRouter} from 'react-router-dom';
import './WebsiteNav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profiles from '../../pages/Explore/profiles'; 
/* This profiles import is temporary;
use API when available. Instead of using profiles array, make an API query to this.props.location.pathname.split('/'
[1]) so that it grabs the src for image in user object
do this on component did mount, component did update, and only IF the image result exists */
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
  DropdownItem } from 'reactstrap';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      profile : this.clicked
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
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><FontAwesomeIcon icon="stroopwafel" /> iiMage</NavbarBrand>
        {profiles[this.props.location.pathname.split("/")[2] - 1] ? <div style={{width:'100%', display:'flex', justifyContent:'center'}}><img className="pfpImage" src = {profiles[this.props.location.pathname.split("/")[2] - 1].profile} /></div> : null}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Link to="/Explore"><NavLink>Explore</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/About"><NavLink href="/About">About</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Login | Sign Up
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="/Login">
                    Login
                  </DropdownItem>
                  <DropdownItem href="/SignUp">
                    Sign Up
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    IDK what to put here yet
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Example);
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