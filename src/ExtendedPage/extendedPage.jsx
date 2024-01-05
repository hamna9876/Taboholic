import React from 'react';
import { render } from 'react-dom';
import TabList from '../TabsList/TabList';

function ExtendedPage() {
  return (
    <div className="ExtendedPage">
      <p>hello from extended</p>
      <TabList />
    </div>
  )
}

render(<ExtendedPage />, document.getElementById("react"));