import React from "react";
import "./Tab.css";
import { Button, CloseButton, Text, Avatar } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import EmissionsPerTab from "../emissions/EmissionsPerTab";

export default function Tab({ id, favIcon, title, url }) {
  //const hasFavIcon = !favIcon === undefined || favIcon.length > 0;
  const { hovered, ref } = useHover();

  const deleteTab = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(id);
    chrome.tabs.remove(id);
    console.log("tab removed");
  };

  const openTab = () => {
    chrome.tabs.update(id, { active: true });
    console.log(favIcon);
  };

  return (
    <div className="Tab">
      <div className="Emissions">
        <EmissionsPerTab url={url} />
      </div>
      <Button
        className="TabButton"
        onClick={openTab}
        justify="space-between"
        fullWidth
        leftSection={<Avatar src={favIcon} radius="sm" size="sm" />}
        // {hasFavIcon ? <Space w="xl" /> : <Space w="xs" />}

        rightSection={
          <CloseButton
            onClick={deleteTab}
            size="md"
            aria-label="Close tab"
          ></CloseButton>
        }
        variant="default"
        mt="md"
      >
        <Text className="title" truncate="end">
          <label> {title} </label>
        </Text>
      </Button>
    </div>
  );
  //doesnt show mantines ones, could be string trimmed after .svg
}
