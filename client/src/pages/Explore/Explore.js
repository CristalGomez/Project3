import React, { Component } from "react";
import API from "../../utils/API";
import { DefaultButton } from '../../components/Button';
import profiles from './profiles.js';
import CreatorNav from '../../components/Navbars/CreatorNav';
class XPageTwo extends Component {
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
      {profiles.map((profile, i) => (
      console.log(profiles[i].profile),
        <DefaultButton {...profile} key = {i} url = {profiles[i].profile} />
        ))}
    </div>);
  }
}

export default XPageTwo;
