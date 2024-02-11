import React from "react";
import { createRoot } from "react-dom/client";
import ClickButton from "../ExtendedView/ClickButton";
import App from "../app/App";
import TabList from "../TabsList/TabList";
import EmissionsPerTab from "../emissions/EmissionsPerTab";
import { Group, ScrollArea, Title } from "@mantine/core";
import "./popup.css";

console.log("pop up script running");
// const root = createRoot(document.getElementById("react-popup"));

export default function Popup() {
  return (
    <div className="PopUp">
      <ScrollArea h={350} w={520} type="auto" scrollHideDelay={1500}>
        <Group justify="centre" pt={10}>
          <Title className="ExtensionName" pl={10}>
            Taboholic
          </Title>
          <ClickButton buttonText="Show more" />
        </Group>
        <TabList />
        <EmissionsPerTab url="www.google.com" />
      </ScrollArea>
    </div>
  );
}

console.log("pop up script running");

// root.render(<Popup />);
// render(<Popup />, document.getElementById("react-popup"));
