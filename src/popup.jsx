import React from 'react';
import { render } from 'react-dom';
import App from './App';

console.log("pop up script running");

function Popup() {
  return (
    <div>
      <h1> pop up file hello world</h1>
      <p>simple pop up</p>
      <App />
    </div>
  )
}

console.log("pop up script running");

render(<Popup />, document.getElementById("react-target"));

