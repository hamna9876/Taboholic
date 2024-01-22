import React from 'react';
import './Tab.css';
import { CloseButton } from '@mantine/core';

export default function Tab({id, favIcon, url}) {

  const deleteTab = () => {
        console.log(id);
        chrome.tabs.remove(id);
        console.log("tab removed")
  };

  return (
    <li className="Tab">
        <div className="favIcon" id="favIcon">
            <img src={favIcon} />
        </div>
        <div className="url" id="url">
            <label>{url} </label>
        </div>
        <CloseButton onClick={deleteTab}></CloseButton>
    </li>
  );
}