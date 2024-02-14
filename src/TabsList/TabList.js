import React, { useEffect, useState } from "react";
import Tab from "../tabComponent/Tab";
import "./TabList.css";
import { List } from "@mantine/core";

export default function TabList() {
  const [returnedTabs, setTabs] = useState([]);

  useEffect(() => {
    chrome.storage.local.get(["returnedTabs"], (result) => {
      const { returnedTabs } = result;
      setTabs(returnedTabs || []);
    });
  }, [returnedTabs]);

  return (
    <List className="TabList" withPadding spacing={"xs"}>
      {returnedTabs.map((tab) => {
        return <Tab {...tab} key={tab.id} />;
      })}
    </List>
  );
}
