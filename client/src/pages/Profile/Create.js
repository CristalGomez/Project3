import React, { Component } from 'react';
import API from '../../utils/API';
import { Link } from 'react-router-dom';

//on this page the user will create their bio, set skill level, and set a profile picture

class Create extends Component {
  state = {
    bio: 'bio goes here',
    image: 'default image',
    skill: {default: 'client'}
  };

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }

  render() {
    return (<div> 
        <Nav />
        
    </div>);
  }
}

export default Create;
