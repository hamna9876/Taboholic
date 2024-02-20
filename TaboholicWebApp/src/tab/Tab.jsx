import React from "react";
import "./Tab.css";
import { List, CloseButton, Text, Avatar } from "@mantine/core";

export default function Tab({ id, favIcon, title, url }) {
  return (
    <List.Item className="Tab">
      <Avatar src={favIcon} alt="Favicon" radius="sm" size="sm" />
      <div className="TabText">
        <Text className="tabTitle" size="md" weight={500} truncate>
          {title}
        </Text>
        <Text className="url" size="sm" color="dimmed" truncate>
          {url}
        </Text>
      </div>
      {/* <CloseButton className="CloseButton" size="sm" variant="filled" /> */}
    </List.Item>
  );
}
