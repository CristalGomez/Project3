import React from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore'
import About from './pages/About'
import XCollection from './pages/XCollection'
import XNoMatch from './pages/XNoMatch';
import XNav from './components/XNav/XNav';



class App extends Component {
  render() {
    return <Router forceRefresh={!'pushState' in window.history}>
      <div>
        <XNav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/Explore' component={Explore} />
          <Route exact path='/About' component={About} />
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
