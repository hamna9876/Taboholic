import React from 'react';
import './Tab.css';
import { CloseButton, Text } from '@mantine/core';

export default function Tab({id, favIcon, url, title, isExtendedPage}) {

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
        <Text fz="md" > {title} </Text>
        {isExtendedPage && url != null && <Text > {url} </Text>}
        <CloseButton onClick={deleteTab}></CloseButton>
    </li>
  );
}