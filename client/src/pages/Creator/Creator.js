import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Image } from '../../components/Image/Image';
import { TextBox } from '../../components/TextBox/TextBox'
import categories from './categories';
import './Creator.css';


class Creator extends Component {
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
    return (
    <div>
      <h1>Creator Profile Page</h1>
      <TextBox />
      <div className = "grid">
        {categories.map((category, i) => (
          console.log(categories[i].category),
          <Image {...category} key = {i} url = {categories[i].image} text = {categories[i].category} />
          ))}
          </div> 
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