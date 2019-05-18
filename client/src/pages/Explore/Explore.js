import React, { Component } from "react";
import API from "../../utils/API";
import { Image } from '../../components/Image';
import profiles from './profiles.js';
import CreatorNav from '../../components/Navbars/CreatorNav';
class Explore extends Component {
  state = {
    
  };



  render() {
    return (<div>
      <br></br>
      <CreatorNav />
      <div className = "grid">
        {profiles.map((profile, i) => (
          <Image {...profile} id={profiles[i].id} key = {i} url = {profiles[i].profile} />
        ))}
      </div>
    </div>);
  }
}

export default Explore;
