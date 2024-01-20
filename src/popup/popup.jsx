import React, {} from 'react';
import { createRoot } from 'react-dom/client';
import ClickButton from '../ExtendedPage/ClickButton';
import App from '../app/App';
import TabList from '../TabsList/TabList';
import EmissionsPerTab from '../emissions/EmissionsPerTab';

console.log("pop up script running");
// const root = createRoot(document.getElementById("react-popup")); 

console.log("root");

export default function Popup() {
  chrome.storage.local.set({ isExtendedPage : false}, ()=> {

  });
  return (
    <div className="PopUp">
      <h1>Taboholic</h1>
      <ClickButton buttonText="Show more" />
      <TabList />
      {/* <EmissionsPerTab url="www.google.com"/> */}
    </div>
  )
}

console.log("pop up script running");

// root.render(<Popup />);
// render(<Popup />, document.getElementById("react-popup"));