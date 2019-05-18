import React, { Component } from "react";
import API from "../../utils/API";
import { Image } from '../../components/Image';
import profiles from './profiles.js';
import CreatorNav from '../../components/Navbars/CreatorNav';
class Explore extends Component {
  state = {
    
  };

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {
    return (<div>
      <br></br>
      <CreatorNav />
      <div className = "grid">
        {profiles.map((profile, i) => (
        console.log(profiles[i].profile),
        <Image {...profile} key = {i} url = {profiles[i].profile} />
        ))}
      </div>
    </div>);
  }
}

export default Explore;
