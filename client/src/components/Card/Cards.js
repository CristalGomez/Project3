import React from "react";
// import "./Card.css";
import "../Card/Post.css"


const Card = props => (
    <article className="Post">
    <header>
        <div className="Post-user">
            <div className="Post-user-avatar">
            <img alt={props.name} src={props.icon} />
            </div>
            <div className="Post-user-nickname">
                <span>{props.name}</span>
            </div>
        </div>
    </header>
    <div className="Post-image">
        <div className="Post-image-bg">
        <img alt={props.name} src={props.image} />
        </div>
    </div>
    <div className="Post-caption">
        <strong><h3>{props.name}</h3></strong>
        <br></br>
        About Me
        <br></br>
        <p>{props.about}</p>
    </div>
</article>
);
export default Card;