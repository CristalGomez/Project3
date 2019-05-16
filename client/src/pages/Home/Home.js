import React, { Component } from 'react';
import folderApi from '../../utils/foldersAPI';
import { Link } from 'react-router-dom';
import { DefaultButton, XComponentTwo } from '../../components/Button'

class XPage extends Component {
  state = {
    array: ['X', 'Page', 'Array'],
    string: 'XPageString',
  };

  componentDidMount() {
    folderApi.getAllFolders()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {
    return (<div>
      <DefaultButton  />
      <DefaultButton  />
      <DefaultButton  />
      {/* <XComponentTwo array={this.state.array} string={this.state.string} /> */}
      <p>Lorem ipsum.....</p>
    </div>);
  }
}

export default XPage;
