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
      <Link to={"/XPageTwo"}>
        <strong>Go to XPageTwo</strong>
      </Link>
      <DefaultButton array={this.state.array} string={this.state.string} />
      <DefaultButton array={this.state.array} string={this.state.string} />
      <DefaultButton array={this.state.array} string={this.state.string} />
      <XComponentTwo array={this.state.array} string={this.state.string} />
      <p>Lorem ipsum.....</p>
    </div>);
  }
}

export default XPage;
