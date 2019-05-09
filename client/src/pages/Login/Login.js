import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Login extends Component {
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
      LOGIN PAGE
    </div>);
  }
}

export default Login;