import React from 'react';
import { createRoot } from 'react-dom/client';
import TabList from '../TabsList/TabList';

//const root = document.getElementById("react");
//console.log(root);

export default function ExtendedPage() {
  return (
    <div className="ExtendedPage">
      <p>hello from extended</p>
      <TabList />
    </div>
  )
}
//root.render(<ExtendedPage />);