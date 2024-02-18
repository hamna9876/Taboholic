import React from "react";
import "./Tab.css";
import { Button, CloseButton, Text } from "@mantine/core";

export default function Tab({ id, favIcon, title }) {
  return (
    <Button
      className="Tab"
      justify="space-between"
      fullWidth
      leftSection={
        <div className="favIcon">
          <img src={favIcon} />
        </div>
      }
      // {hasFavIcon ? <Space w="xl" /> : <Space w="xs" />}

      rightSection={
        <CloseButton size="sm" aria-label="Close tab"></CloseButton>
      }
      variant="default"
      mt="md"
    >
      <Text className="title" truncate="end">
        <label> {title} </label>
      </Text>
    </Button>
  );
}
