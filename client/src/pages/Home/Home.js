import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';
import { Image } from '../../components/Image'

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
      <Image  />
      <Image  />
      <Image  />
      {/* <XComponentTwo array={this.state.array} string={this.state.string} /> */}
      <p>Lorem ipsum.....</p>
    </div>);
  }
}

export default XPage;
