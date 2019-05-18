import React, { Component } from "react";
import API from "../../utils/API";
import { Image } from '../../components/Image';
import profiles from './profiles.js';
import CreatorNav from '../../components/Navbars/CreatorNav';
class Explore extends Component {
  state = {
    display : [...profiles]
  };

filterHandler = (level) => {
  if (level === "All") {
    return this.setState({display: [...profiles]});
  }
  let currentDisplay = profiles.filter((person, i) => {
    if (level === person.level) {
      return person;
    }
    else {
      return false;
    }
  })
  this.setState({display: currentDisplay})
}

  render() {
    return (<div>
      <br></br>
      <CreatorNav filterHandler = {this.filterHandler}/>
      <div className = "grid">
        {this.state.display.map((person, i) => (
          <Image {...person} id={person.id} key = {i} url = {person.profile} />
        ))}
      </div>
    </div>);
  }
}

export default Explore;
