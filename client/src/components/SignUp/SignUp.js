import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { app } from '../../Config'

const loginStyles = {
    width: "90%",
    maxWidth: "315px",
    margin: "20px auto",
    border: "1px solid #ddd",
    borderRadius: "5px",
    padding: "10px"
}

class signUp extends Component {
    constructor(props){
        super(props)
        this.authWithEmail = this.authWithEmail.bind(this)
    }

    authWithEmail(event){
        event.preventDefault()
        console.table([{
            email: this.emailInput.validationMessage,
            password: this.passwordInput.value
        }])
    }


    render(){
        return (
            <div style={loginStyle}>
            <h3>First Name</h3>
            <input style={{width: "100%"}} className="input-fName" name="fName" type="fName" ref={(input) => {this.fNameInput = input}} placeholder="First Name"></input>

            <h3>Last Name</h3>
            <input style={{width: "100%"}} className="input-lName" name="lName" type="lName" ref={(input) => {this.lNameInput = input}} placeholder="Last Name"></input>


            <h3>Email</h3>
            <input style={{width: "100%"}} className="input-email" name="email" type="email" ref={(input) => {this.emailInput = input}} placeholder="Email"></input>

            <h3>Password</h3>
            <input style={{width: "100%"}} className="input-password" name="password" type="password" ref={(input) => {this.passwordInput = input}} placeholder="Password"></input>


            </div>
        )
    }


}

export default SignUp