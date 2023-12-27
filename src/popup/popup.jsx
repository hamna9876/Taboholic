import React, {useState, useEffect} from 'react';
import { render } from 'react-dom';
import App from '../app/App';
import ExtendedPage from '../ExtendedPage/extendedPage';
import TabList from '../TabsList/TabList';

console.log("pop up script running");

function Popup() {
  return (
    <div className="PopUp">
      <h1>Taboholic</h1>
      <a href='ExtendedPage'>click me</a>
      <TabList />
      <ExtendedPage />
      <App />
    </div>
  )
}

console.log("pop up script running");

render(<Popup />, document.getElementById("react-target"));