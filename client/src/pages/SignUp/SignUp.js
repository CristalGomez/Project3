import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import "./SignUp.css"

class SignUp extends Component {


  constructor(props){
    super(props)
    this.setState = {
      array: ['X', 'PageTwo', 'Array'],
      string: 'XPageTwoString',
      currentUserEmail: '',
      currentUserName: '',
      value: '',
      handleSubmit: this.handleSubmit.bind(this),
      handleChange: this.handleChange.bind(this)
    }
  }

  componentDidMount() {
    API.getDocuments()
      .then((res) => { console.log(res.data) })
      .catch((err) => console.log(err));


    //parse it so you can grab the values using . notation
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));

    this.setState({
      currentUserEmail: idToken.idToken.claims.currentUserEmail,
      currentUserName: idToken.idToken.claims.name
    })
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault()

  }

  render() {
    console.log(this.state)
    //should get currentUserEmail & currentUserName

    const { currentUserEmail, currentUserName } = this.state;
    return (
    <div>
      <MDBContainer className="SignForm">
        <MDBRow>
          <MDBCol md="6" className="ActForm">

            <form onSubmit={this.handleSubmit}>
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
                  //maybe value ={this.state.value}
                  value={this.state.currentUserName} onChange={this.handleChange}
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  //maybe value = {this.state.value}
                  value={this.state.currentUserEmail}
                  onChange={this.handleChange}
                />

                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  value={this.state.value}
                  
                />
        
              </div>
              <div className="text-center">
                <MDBBtn type="submit" value="submit">Register</MDBBtn>
              </div>
            </form>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>);
  }
}

export default SignUp;
