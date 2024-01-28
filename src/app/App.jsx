// import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import ExtendedPage from "../ExtendedPage/extendedPage";
import Popup from "../popup/popup";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

//const isExtendedPage = false;
const rootId = "react-root";
// const rootId = isExtendedPage ? "react-extended" : "react-popup";
// const root = createRoot(document.getElementById("react-root"));
// const switchRoot = createRoot(document.getElementById(rootId));
// console.log(root);
const isExtendedPage = chrome.storage.local.get(["isExtendedPage"], () => {});

function App() {
  //const [isExtendedPage, setExtendedPage] = useState(true); //initially set to false on first render and then updated throughout app
  //shared data: 1) tab array  2) isExtenedPage

  useEffect(() => {
    chrome.storage.local.get(["isExtendedPage"], (result) => {
      const { isExtendedPage } = result;
      // const rootId = isExtendedPage ? "react-extended" : "react-popup";
      const root = createRoot(document.getElementById(rootId));

      if (isExtendedPage) {
        root.render(
          <MantineProvider>
            <ExtendedPage />
          </MantineProvider>
        );
      } else {
        root.render(
          <MantineProvider>
            <Popup />
          </MantineProvider>
        );
      }
    });
  }, []);

  return (
    <div className="App">
      <p> hello from app </p>
    </div>
  );
}

const root = createRoot(document.getElementById(rootId));
root.render(<App />);
