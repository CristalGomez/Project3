import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { DefaultButton, XComponentTwo } from '../../components/XComponent'

class XPage extends Component {
  state = {
    array: ['X', 'Page', 'Array'],
    string: 'XPageString',
  };

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {
    return (<div>
      HOME PAGE
    </div>);
  }
}

export default XPage;
