import React from 'react';
import { createRoot } from 'react-dom/client';
import TabList from '../TabsList/TabList';
import './extendedPage.css';

//const root = document.getElementById("react");
//console.log(root);

export default function ExtendedPage() {
  chrome.storage.local.set({isExtendedPage : false}, ()=> {

  });

  return (
    <div className="ExtendedPage">
     {/* <div class="w-52 h-10 text-black text-xl font-normal font-['Mukta']">Tabaholic<br/></div> */}

      <TabList />
      
    </div>
  )
}
//root.render(<ExtendedPage />);