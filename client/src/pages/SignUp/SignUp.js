import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "./SignUp.css"

class SignUp extends Component {
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
     
     <MDBContainer className="SignForm">
      <MDBRow>
        <MDBCol md="6" className="ActForm">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn>Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>




    </div>);
  }
}

export default SignUp;


//mine

import React, { Component } from 'react';

class SignUp extends Component {

  state={
    currentUserName: '',
    currentUserEmail: ''
  }

  componentDidMount(){
    //parse it so you can grab the values using . notation
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));

    this.setState({
      currentUserEmail: idToken.idToken.claims.currentUserEmail,
      currentUserName: idToken.idToken.claims.name
    })
  }

  render(){
    console.log(this.state)
    //should get currentUserEmail & currentUserName

    const { currentUserEmail, currentUserName } = this.state;
    return (
      //inside the div grab elements from profile page & paste the user's name on to the name part of the profile page
      <div>
        <p>{ currentUserName }</p>
        {/* <p>{ skill } </p> */}
      </div>

    )
  }
}

export default SignUp;