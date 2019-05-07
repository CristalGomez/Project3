import React from 'react';
import './XComponent.css';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DefaultButton = (props) => {
  return (
    <button onClick = {props.onClick}>{props.title}
    </button>
  );
}

export { DefaultButton };
