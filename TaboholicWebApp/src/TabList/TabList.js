import React, { useEffect, useState } from "react";
import Tab from "../tab/Tab";
import "./TabList.css";
import { List, Button } from "@mantine/core";

export default function TabList() {
  const [buttonData, setButtonData] = useState("");
  const [tabData, setTabData] = useState([]);
  // const [windowIdData, setwindowIdData] = useState("");

  useEffect(() => {
    const handleDataFromContentScript = (event) => {
      if (event.detail) {
        setButtonData(event.detail);
      }
    };

    // const handleWindowDataFromContentScript = (event) => {
    //   if (event.detail) {
    //     setwindowIdData(event.detail);
    //   }
    // };

    const handleTabDataFromContentScript = (event) => {
      if (event.detail) {
        setTabData(event.detail);
      }
    };

    document.addEventListener("dataToWebApp", handleDataFromContentScript);
    //document.addEventListener("WindowID", handleWindowDataFromContentScript);
    document.addEventListener("TabDataEvent", handleTabDataFromContentScript);

    return () => {
      document.removeEventListener("dataToWebApp", handleDataFromContentScript);
      // document.removeEventListener(
      //   "WindowID",
      //   handleWindowDataFromContentScript
      // );
    };
  }, []);

  return (
    <>
      {/* <h2>{windowIdData}</h2> */}
      <List className="TabList" withPadding spacing={"xs"}>
        {tabData.map((tab) => {
          return <Tab {...tab} key={tab.id} />;
        })}
      </List>
    </>
  );
}

{
  /* <List className="TabList" withPadding spacing={"xs"}> */
}
{
  /* {returnedTabs.map((tab) => {
        return <Tab {...tab} key={tab.id} />;
      })} */
}

{
  /* {returnedTabs.map((tab, index) => (
          <li key={index}>{tab}</li>
        ))} */
}
{
  /* {<p>{listData}</p>}
      </List> */
}
