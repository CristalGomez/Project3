import React from 'react';
import './Image.css';
import {Link} from 'react-router-dom';

const Image = (props) => {
  return (
    <div className = "item">  
      <Link to={`/Creator/${props.id ? props.id : ''}`} state={{"image": 'test'}}><img className="circle"  src={props.url}/></Link>
      <p>{props.text}</p>
    </div>
 );
}

export { Image };
