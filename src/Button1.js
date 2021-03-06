/* Button1.js */
import React from 'react';
import './Button1.css';

function Button({ size }) {
  if (size === 'big') {
    return <button className="button big">Big button</button>;
  } else {
    return <button className="button small">Small button</button>;
  }
}
export default Button;
