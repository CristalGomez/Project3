import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { DefaultButton, XComponentTwo } from '../../components/Button'

class XPageTwo extends Component {
  state = {
    array: ['X', 'PageTwo', 'Array'],
    string: 'XPageTwoString',
  };

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {
    return (<div>
      <Link to={"/"}>
        <strong>Go to XPageOne</strong>
      </Link>
      <DefaultButton array={this.state.array} string={this.state.string} />
      {/* <XComponentTwo array={this.state.array} string={this.state.string} /> */}


      About
    </div>);
  }
}

export default XPageTwo;