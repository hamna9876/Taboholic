console.log("content script loaded");

function displayAList() {
  const list = document.createElement("ul");

  for (let index = 0; index < 4; index++) {
    const listItem = document.createElement("li");
    listItem.textContent = index;

    list.appendChild(listItem);
  }

  document.body.appendChild(list);
}

// displayAList();

const dataToSend = "hello";
const event = new CustomEvent("dataToWebApp", { detail: dataToSend });
document.dispatchEvent(event);

// chrome.windows.getCurrent({ populate: true }, (currentWindow) => {
//   const windowId = currentWindow.id;
//   console.log(windowId);
//   const event = new CustomEvent("WindowID", { detail: windowId });
//   document.dispatchEvent(event);
// });

// chrome.tabs.query({ currentWindow: true }, (tabs) => {
//   const windowId = tabs[0].windowId;
//   console.log(windowId);
//   const event = new CustomEvent("WindowID", { detail: "test" });
//   document.dispatchEvent(event);
// });

//this is for sending only the window id to the extended view

// chrome.runtime.sendMessage({ action: "getData" }, function (response) {
//   console.log("Data received from background:", response.data);
//   const windowId = response.data[0].window;
//   console.log(windowId);
//   const event = new CustomEvent("WindowID", { detail: windowId });
//   document.dispatchEvent(event);
// });

// for now i will just send all the data and show it
chrome.runtime.sendMessage({ action: "getData" }, async function (response) {
  try {
    console.log("Data received from background:", response.data);
    const tabData = response.data;
    console.log(tabData);

    const fetchedData = [];

    for (const tab of tabData) {
      const data = await fetchDataForUrl(tab.url);
      fetchedData.push(data);
    }
    const emissionsEvent = new CustomEvent("EmissionsEvent", {
      detail: fetchedData,
    });
    document.dispatchEvent(emissionsEvent);

    console.log(fetchedData);
    console.log(emissionsEvent);

    const event = new CustomEvent("TabDataEvent", { detail: tabData });
    document.dispatchEvent(event);
    console.log(event);
  } catch (error) {
    console.error("Error handling response:", error);
  }
});

const fetchDataForUrl = async (url) => {
  try {
    const encodedUrl = encodeURIComponent(url);
    const requestURL = `https://api.websitecarbon.com/site?url=${encodedUrl}`;
    const response = await fetch(requestURL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    return null;
  }
};
