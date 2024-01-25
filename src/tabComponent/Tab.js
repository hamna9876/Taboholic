import React from 'react';
import './Tab.css';
import { CloseButton, Space } from '@mantine/core';

export default function Tab({id, favIcon, url}) {
  
  const hasFavIcon = favIcon === undefined || favIcon.length <= 0;
  const deleteTab = () => {
        console.log(id);
        chrome.tabs.remove(id);
        console.log("tab removed");
        console.log(favIcon);
  };

  const openTab = () => {
      chrome.tabs.update(id, {active: true});
      console.log(favIcon);
  }; 

  return (
    <li className="Tab" onClick={openTab}>
        <div className="favIcon" id="favIcon">
            <img src={favIcon} />
        </div>
        { hasFavIcon ? <Space w="xl"/> : <Space w="xs"/>}
        <div className="url" id="url">
            <label> {url} </label>
        </div>
        <CloseButton onClick={deleteTab}></CloseButton>
    </li>
  );
  //doesnt show mantines ones, could be string trimmed after .svg
}