import React from 'react';
import { render } from 'react-dom';
import App from './App';
import ExtendedPage from './ExtendedPage/extendedPage';
import Tab from './tabComponent/Tab';

console.log("pop up script running");

const favIconIdElement = document.getElementById("favIcon");
const urlIdElement = document.getElementById("url");

function Popup() {
  return (
    <div>
      <h1>Taboholic</h1>
      <a href='ExtendedPage'>click me</a>
      <Tab />
      <ExtendedPage />
      <App />
    </div>
  )
}

chrome.storage.local.get(["returnedTabs"], (result) => 
{

  const {returnedTabs} = result;

  // result.map((tab => {
    
  // }))
  console.log(returnedTabs[0]);
})

console.log("pop up script running");

render(<Popup />, document.getElementById("react-target"));

