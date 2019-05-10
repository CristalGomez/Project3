import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { XComponentOne, XComponentTwo } from '../../components/XComponent'

class Client extends Component {
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
        <h1>Client Profile Page</h1>
    </div>);
  }
}

export default Client;
