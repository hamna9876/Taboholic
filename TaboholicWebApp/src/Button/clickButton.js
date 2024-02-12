import { Button } from "@mantine/core";
export default function ClickButton() {
  const changeState = () => {
    console.log("button test");
    // chrome.tabs.create({
    //   url: "www.google.com",
    // });
  };
  return <Button onClick={changeState}> click for test </Button>;
}
