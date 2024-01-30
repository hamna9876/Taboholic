import { useEffect } from "react";

chrome.tabs.onCreated.addListener(() => {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    const tabArray = tabs.map((tab) => ({
      id: tab.id,
      title: tab.title,
      url: tab.url,
      favIcon: tab.favIconUrl,
    }));

    chrome.storage.local.set({ returnedTabs: tabArray });
    for (let index = 0; index < tabArray.length; index++) {
      console.log("tabs= " + tabArray[index].favIcon + tabArray[index].title);

      if (typeof tabArray[index].favIcon === "string") {
        //  console.log(tabArray[index].favIcon.length);
      }
    }

    console.log("savedTabs = " + tabArray);
    console.log("testing");
  });
});

//maybe create listeners for all events, created, deleted, onupdated.

chrome.tabs.onRemoved.addListener((id) => {
  console.log("removal logged in background");
  console.log(id);
  chrome.storage.local.get(["returnedTabs"], (result) => {
    const { returnedTabs } = result;
    const updatedTabs = returnedTabs.filter((tab) => tab.id !== id);
    chrome.storage.local.set({ returnedTabs: updatedTabs });
  });
});
//i get it, meant to udpate the list before storing back in storage.

// const deleteTab = (id) => {
//   setTabs(previousTabs =>
//   {
//       console.log(id);
//       return previousTabs.filter(tab => tab.id !== id);
//   })
// };

// //https://www.youtube.com/watch?v=olLXAFJiL6Q

chrome.runtime.onInstalled.addListener(() => {
  console.log("Background script is running after installed");
});
console.log("Background script is running"); // okay this works

// chrome.storage.local.set({ isExtendedPage : false}, ()=> {

// });

// const url = "https://www.google.com/";
// const reqestURL = `https://api.websitecarbon.com/site?url=
// ${encodeURIComponent(url)}`; //`https://api.websitecarbon.com/site?url=${encodeURIComponent(url)}`;

// // fetch(getCookie);

// const request = async () => {
//   const response = await fetch(reqestURL);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
// };
// //https://api.websitecarbon.com/site?url=

// request();
