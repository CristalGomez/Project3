import React from 'react';
import './Image.css';
import {Link} from 'react-router-dom';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Image = (props) => {
  return (
    <div className = "item">  
      <Link to='/Creator'><img className="circle"  src={props.url}/></Link>
      <p>{props.text}</p>
    </div>
 );
}

export { Image };