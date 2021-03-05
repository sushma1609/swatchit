import React from 'react'

function Buttonresuable(props) {
    const className = `button ${props.type}`
   
    return (
      <button className={className} onClick={props.handleClick}>
        {props.icon && props.icon} {props.label}
      </button>
    );
   }
export default Buttonresuable   