import React, { useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconExternalLink } from "@tabler/icons-react";

export default function ClickButton({ buttonText }) {
  const [text, setText] = useState(buttonText);

  const changeState = () => {
    console.log("button test");
    chrome.tabs.create({
      url: "http://localhost:3000/",
    });
    //console.log(isExtendedPage);
    //set the variable to true
    //needs to trigger a new tab.
  };
  return (
    <>
      {/* <button onClick={changeState}>{buttonText}</button> */}
      <ActionIcon
        id="buttonIdTriffer"
        component="a"
        size="lg"
        aria-label="Open in a new tab"
        onClick={changeState}
        title="Extended View"
      >
        <IconExternalLink />
      </ActionIcon>
    </>
  );
}
