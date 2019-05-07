import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { XComponentOne, XComponentTwo } from '../../components/XComponent'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Container, Row, Col } from 'reactstrap';

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
      <div>
        <Container className="formContainer">

          
            <Col xs="6">
              <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input placeholder="username" />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <Input addon type="checkbox" aria-label="Checkbox for following text input" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Check it out" />
              </InputGroup>
              <br />
              <InputGroup>
                <Input placeholder="username" />
                <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Dolla dolla billz yo!" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>$</InputGroupText>
                  <InputGroupText>$</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input placeholder="Amount" min={0} max={100} type="number" step="1" />
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
              </InputGroup>
            </Col>
          

        </Container>


      </div>
    </div>);
  }
}

export default SignUp;

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