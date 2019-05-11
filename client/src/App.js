import React from 'react';
import {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Post from './components/Post/index'
import Home from './pages/Home';
import Explore from './pages/Explore'
import About from './pages/About'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Client from './pages/Client'
import Creator from './pages/Creator'
import {Elements, StripeProvider} from 'react-stripe-elements';


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
          {/* <Route exact path='/Post' component={Post} />  */}
        </Switch>
      </div>
    </Router>
  }
};

export default App;
