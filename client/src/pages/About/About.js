import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { DefaultButton, XComponentTwo } from '../../components/XComponent'
import Card from "../../components/Card/Card"
import card from "./cards.json"


class About extends Component {
  state = {
    card,
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
        ABOUT PAGE
        {this.state.card.map(card => (
          <Card 
          clickCount = {this.clickCount}
          id = {card.id}
          key = {card.id}
          image= {card.image}
          />
        ))}
    </div>);
  }
}

export default About;