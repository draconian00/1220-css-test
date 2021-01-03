/* Button2.js */
import React from 'react';
import style from './Button2.module.css';

function Button({ size }) {
  if (size === 'big') {
    return <button className={`${style.button} ${style.big}`}>Big button</button>;
  } else {
    return <button className={`${style.button} ${style.small}`}>Small button</button>;
  }
}
export default Button;
console.log(style);
