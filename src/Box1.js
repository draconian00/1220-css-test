/* Box1.js */
import React from 'react';
import './Box1.css';

function Box({ size }) {
  if (size === 'big') {
    return <div className="box big">Big box</div>;
  } else {
    return <div className="box small">Small box</div>;
  } 
}
export default Box;
