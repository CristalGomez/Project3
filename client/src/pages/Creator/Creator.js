import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import ImageUpload from '../../components/ImageUpload/ImageUpload'

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
    return (<div>
        <h1>Creator Profile Page</h1>
        <ImageUpload/>
    </div>);
  }
}

export default Creator;

// *******************************************************************************************
// I thought this piece of code could work for pullin up a person from the database. not to sure to be honest -skylar
// **********************************************************************************************
// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// class XCollection extends Component {
//   state = {
//     idparam: ''
//   };

//   componentDidMount() {
//     this.setState({ idparam: this.props.match.params.id });
//   }

//   render() {
//     return (
//       <div>
//         Load XCollection with id:{this.state.idparam}
//       </div>
//     );
//   }
// }

// export default XCollection;