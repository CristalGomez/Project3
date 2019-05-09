import React from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Post from './components/Post/index'
import Home from './pages/Home';
import Explore from './pages/Explore'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Client from './pages/Client'
import Creator from './pages/Creator'


import XCollection from './pages/XCollection'
import XNoMatch from './pages/XNoMatch';
import WebsiteNav from './components/Navbars/WebsiteNav';
// import Card from "./components/Card"
// import cards from "./cards.json"

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


class App extends Component {
  render() {
    return <Router forceRefresh={!'pushState' in window.history}>
      <div>
        <WebsiteNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Explore' component={Explore} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/SignUp' component={SignUp} />
          <Route exact path='/Client' component={Client} />
          <Route exact path='/Creator' component={Creator} /> 
          <Route exact path='/Post' component={Post} /> 

          <Route exact path='/XCollection/:id' component={XCollection} />
          <Route component={XNoMatch} />
        </Switch>
      </div>
    </Router>
  }
};

export default App;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const styles = {
  // root: {
  //   flexGrow: 1,
  // },
  // grow: {
  //   flexGrow: 1,
  // },
  // menuButton: {
  //   marginLeft: -12,
  //   marginRight: 20,
  // },
// };

// function ButtonAppBar(props) {
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
//       {/*content container, e.g. images*/}
//       <div>
//         I'm a place
//   </div>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ButtonAppBar);
