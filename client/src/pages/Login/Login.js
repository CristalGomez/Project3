import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import "./Login.css"

class Login extends Component {


    state = {
    array: ['X', 'Page', 'Array'],
    string: 'XPageString',
    authenticated: null
  };
  
  checkAuthentication = async () => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.auth) {
      this.setState({ authenticated })
    }
  }
  
  componentDidMount = async ()=> {
    this.checkAuthentication()
  
    folderApi.getAllFolders()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));
  }
  
  componentDidUpdate = async () => {
    this.checkAuthentication()
  }
  
  login = async () => {
    this.props.auth.login('/')
  }
  
  logout = async () => {
    this.props.auth.logout('/')
  }

  render() {
    return (<div>
      <MDBContainer className="LogForm">
        <MDBRow>
          <MDBCol className="ActForm" md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn>Login</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
        <div className="SignUpLink"><a href="/SignUp">Don't have an account? Sign up!</a></div>
      </MDBContainer>




    </div>);
  }
}

export default Login;