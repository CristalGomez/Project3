import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { XComponentOne, XComponentTwo } from '../../components/XComponent'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Row, Col } from 'reactstrap';

import Login from '../Login';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }
  componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
  handleClick(event,role){
    var apiBaseUrl = "http://localhost:4000/api/";
    // console.log("values in register handler",role);
    var self = this;
    //To be done:check for empty values before hitting submit
    if(this.state.first_name.length>0 && this.state.last_name.length>0 && this.state.email.length>0 && this.state.password.length>0){
      var payload={
      "first_name": this.state.first_name,
      "last_name":this.state.last_name,
      "userid":this.state.email,
      "password":this.state.password,
      "role":role
      }
      axios.post(apiBaseUrl+'/register', payload)
     .then(function (response) {
       console.log(response);
       if(response.data.code === 200){
        //  console.log("registration successfull");
         var loginscreen=[];
         loginscreen.push(<Login parentContext={this} appContext={self.props.appContext} role={role}/>);
         var loginmessage = "Not Registered yet.Go to registration";
         self.props.parentContext.setState({loginscreen:loginscreen,
         loginmessage:loginmessage,
         buttonLabel:"Register",
         isLogin:true
          });
       }
       else{
         console.log("some error ocurred",response.data.code);
       }
     })
     .catch(function (error) {
       console.log(error);
     });
    }
    else{
      alert("Input field value is missing");
    }

  }
  render() {
    // console.log("props",this.props);
    var userhintText,userLabel;
    if(this.props.role === "student"){
      userhintText="Enter your Student Id",
      userLabel="Student Id"
    }
    else{
      userhintText="Enter your Teacher Id",
      userLabel="Teacher Id"
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText={userhintText}
             floatingLabelText={userLabel}
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event,this.props.role)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default SignUp;


// ***********************************************************************************************
// Bewlow is working code 
// ***********************************************************************************************
// class SignUp extends Component {
//   state = {
//     array: ['X', 'PageTwo', 'Array'],
//     string: 'XPageTwoString',
//   };

//   componentDidMount() {
//     API.getDocuments()
//       .then((res) => { console.log(res.data) })
//       .catch((err) => console.log(err));
//   }

//   render() {
//     return (<div>
//       <div>
//         <Container className="formContainer">

          
//             <Col xs="6">
//               <InputGroup>
//                 <InputGroupAddon addonType="prepend">@</InputGroupAddon>
//                 <Input placeholder="username" />
//               </InputGroup>
//               <br />
//               <InputGroup>
//                 <InputGroupAddon addonType="prepend">
//                   <InputGroupText>
//                     <Input addon type="checkbox" aria-label="Checkbox for following text input" />
//                   </InputGroupText>
//                 </InputGroupAddon>
//                 <Input placeholder="Check it out" />
//               </InputGroup>
//               <br />
//               <InputGroup>
//                 <Input placeholder="username" />
//                 <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
//               </InputGroup>
//               <br />
//               <InputGroup>
//                 <InputGroupAddon addonType="prepend">
//                   <InputGroupText>$</InputGroupText>
//                   <InputGroupText>$</InputGroupText>
//                 </InputGroupAddon>
//                 <Input placeholder="Dolla dolla billz yo!" />
//                 <InputGroupAddon addonType="append">
//                   <InputGroupText>$</InputGroupText>
//                   <InputGroupText>$</InputGroupText>
//                 </InputGroupAddon>
//               </InputGroup>
//               <br />
//               <InputGroup>
//                 <InputGroupAddon addonType="prepend">$</InputGroupAddon>
//                 <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
//                 <InputGroupAddon addonType="append">.00</InputGroupAddon>
//               </InputGroup>
//             </Col>
          

//         </Container>


//       </div>
//     </div>);
//   }
// }

// export default SignUp;

// const Example = (props) => {
//   return (
//     <div>
//       <InputGroup>
//         <InputGroupAddon addonType="prepend">@</InputGroupAddon>
//         <Input placeholder="username" />
//       </InputGroup>
//       <br />
//       <InputGroup>
//         <InputGroupAddon addonType="prepend">
//           <InputGroupText>
//             <Input addon type="checkbox" aria-label="Checkbox for following text input" />
//           </InputGroupText>
//         </InputGroupAddon>
//         <Input placeholder="Check it out" />
//       </InputGroup>
//       <br />
//       <InputGroup>
//         <Input placeholder="username" />
//         <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
//       </InputGroup>
//       <br />
//       <InputGroup>
//         <InputGroupAddon addonType="prepend">
//           <InputGroupText>$</InputGroupText>
//           <InputGroupText>$</InputGroupText>
//         </InputGroupAddon>
//         <Input placeholder="Dolla dolla billz yo!" />
//         <InputGroupAddon addonType="append">
//           <InputGroupText>$</InputGroupText>
//           <InputGroupText>$</InputGroupText>
//         </InputGroupAddon>
//       </InputGroup>
//       <br />
//       <InputGroup>
//         <InputGroupAddon addonType="prepend">$</InputGroupAddon>
//         <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
//         <InputGroupAddon addonType="append">.00</InputGroupAddon>
//       </InputGroup>
//     </div>
//   );
// };

// export default Example;