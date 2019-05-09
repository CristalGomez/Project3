import React from 'react';
import './Button.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DefaultButton = (props) => {
  return (
    <img className="circle" onClick = {props.onClick} src={props.url}></img>
  );
}

export { DefaultButton };
