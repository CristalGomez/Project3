import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

import ImageUpload from '../../components/ImageUpload/ImageUpload'

import { Image } from '../../components/Image/Image';

import categories from './categories';
import './Creator.css';
// import '../../components/Email/Email'


class Creator extends Component {
  state = {
    array: ['X', 'PageTwo', 'Array'],
    string: 'XPageTwoString',
  };

  fileSelectedHandler = event => {
    console.log(event.target);
  }

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {

    return (
    <div>
      <h1>Creator Profile Page</h1>
      <div className = "grid">
        {categories.map((category, i) => (
          <Image {...category} key = {i} url = {categories[i].image} text = {categories[i].category} />
          ))}
          <ImageUpload />
          {/* <Email /> */}
          </div> 

    </div>
    
    );

  }
}

export default Creator;
