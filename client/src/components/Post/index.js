// i need to figure out how to get cards to display using a javascript file and map function


// src/components/Post/index.js
import React, { Component } from "react";
import Card from "../../components/Card/Card"
// import card from "../"
import "./Post.css"
class Post extends Component {
    render() {
        return <article className="Post" ref="Post">
            <header>
                <div className="Post-user">
                    <div className="Post-user-avatar">
                        {this.state.card.map(card => (
                            <Card
                                clickCount={this.clickCount}
                                id={card.id}
                                key={card.id}
                                image={card.image}
                            />
                        ))}
                    </div>
                    <div className="Post-user-nickname">
                        <span>Chris</span>
                    </div>
                </div>
            </header>
            <div className="Post-image">
                <div className="Post-image-bg">
                    <img alt="Icon Living" src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
                </div>
            </div>
            <div className="Post-caption">
                <strong>Chris</strong> Moving the community!
            </div>
        </article>;
    }
}
export default Post;