import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { DefaultButton, XComponentTwo } from '../../components/XComponent'

class About extends Component {
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
        ABOUT PAGE
    </div>);
  }
}

export default About;