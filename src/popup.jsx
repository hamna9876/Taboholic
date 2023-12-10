import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ExtendedPage from './ExtendedPage/extendedPage'

console.log("pop up script running");

function Popup() {
  return (
    <div>
      <h1>Taboholic</h1>
      <a href='ExtendedPage'>click me</a>
      <ExtendedPage />
      <App />
    </div>
  )
}

console.log("pop up script running");

render(<Popup />, document.getElementById("react-target"));

