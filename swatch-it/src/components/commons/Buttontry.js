//import { buildQueries } from '@testing-library/react';
import React from 'react'
function Buttontry(props) {
    return (
      <button className="btn btn-primary" onClick={props.handleClick}>
        {props.label}
      </button>
    );
   }

 export default Buttontry
