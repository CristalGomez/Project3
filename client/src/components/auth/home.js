import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
    state = { authenticated: null};

    checkAuthentication = async () => {
        const authenticated = await this.props.auth.isAuthenticated();
        if(authenticated !== this.state.auth){
            this.setState({ authenticated})
        }
    }

    async componentDidMount(){
        this.checkAuthentication()
    }

    async componentDidUpdate(){
        this.checkAuthentication()
    }

    login = async () => {
        this.props.auth.login('/')
    }

    logout = async () => {
        this.props.auth.logout('/')
    }

    render(){
        if (this.state.authenticated === null) return null;

        const button = this.state.authenticated ? (
            //displayed in the Navbar of profile page
            <div>
            
                <button className="logout-btn" onClick={this.logout}> Logout</button>
            </div>
        ) : (
            <div>
                <p>Login</p>
                <button className="login-btn" onClick={this.login}>Login</button>
            </div>
        )


        return (
            <div className="profileNav">
                <Nav />
                {button}
            </div>
        )
    }
})