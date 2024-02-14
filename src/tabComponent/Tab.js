import React from "react";
import "./Tab.css";
import { Button, CloseButton, Text, Space } from "@mantine/core";
import { useHover } from "@mantine/hooks";

export default function Tab({ id, favIcon, title }) {
  const hasFavIcon = !favIcon === undefined || favIcon.length > 0;
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
    // <div className="Tab">
    <Button
      className="Tab"
      onClick={openTab}
      justify="space-between"
      fullWidth
      leftSection={
        hasFavIcon ? (
          <div className="favIcon">
            <img src={favIcon} />
          </div>
        ) : (
          <Space w="xl" />
        )
      }
      // {hasFavIcon ? <Space w="xl" /> : <Space w="xs" />}

      rightSection={
        <CloseButton
          onClick={deleteTab}
          size="sm"
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
    // </div>
  );
  //doesnt show mantines ones, could be string trimmed after .svg
}
