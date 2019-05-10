import React from "react";
import "./Card.css";


const Card = props => (
    <article className="Post">
    <header>
        <div className="Post-user">
            <div className="Post-user-avatar">
                <img alt="Icon Living" src="https://i.imgur.com/sHDSn2Z.jpg" />
            </div>
            <div className="Post-user-nickname">
                <span>Skylar Piper</span>
            </div>
        </div>
    </header>
    <div className="Post-image">
        <div className="Post-image-bg">
        <img alt={props.name} src={props.image} />
        </div>
    </div>
    <div className="Post-caption">
        <strong><h3>Skylar Piper</h3></strong>
        <br></br>
        About Me
        <br></br>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
</article>
);
export default Card;