import React from "react";
import "./Tab.css";
import { Button, CloseButton, Flex, Space } from "@mantine/core";
import EmissionsPerTab from "../emissions/EmissionsPerTab";
import { useHover } from "@mantine/hooks";

export default function Tab({ id, favIcon, url }) {
  const hasFavIcon = favIcon === undefined || favIcon.length <= 0;
  const { hovered, ref } = useHover();
  const deleteTab = () => {
    console.log(id);
    chrome.tabs.remove(id);
    console.log("tab removed");
  };

  const openTab = () => {
    chrome.tabs.update(id, { active: true });
    console.log(favIcon);
  };

  return (
    <li className="Tab" onClick={openTab}>
      <div className="favIcon" id="favIcon">
        <img src={favIcon} />
      </div>
      {hasFavIcon ? <Space w="xl" /> : <Space w="xs" />}
      <div className="url" id="url">
        <label> {url} </label>
      </div>
      
        <CloseButton
         onClick={deleteTab}
         size="sm"
         variant="transparent"
         aria-label="Close tab"
         style={{ marginLeft: 'auto' }}
        ></CloseButton>
        <EmissionsPerTab url={url} />
    </li>
    
  );
  //doesnt show mantines ones, could be string trimmed after .svg
}
