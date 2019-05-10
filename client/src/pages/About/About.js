import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Cards"
import card from "../../components/Card/card"
import "../../pages/About/About.css"


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
    return (<div className="IMGOutput">
        
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