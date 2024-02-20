function getTabArray() {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    const tabArray = tabs.map((tab) => ({
      window: tab.windowId,
      id: tab.id,
      title: tab.title,
      url: tab.url,
      favIcon: tab.favIconUrl
    }));

    chrome.storage.local.set({ returnedTabs: tabArray });

    // for (let index = 0; index < tabArray.length; index++) {
    //   console.log("tabs= " + tabArray[index].favIcon + tabArray[index].title);
    //   console.log("window id = ", tabArray[index].window);
    //   if (typeof tabArray[index].favIcon === "string") {
    //     //  console.log(tabArray[index].favIcon.length);
    //   }
    // }

    console.log("savedTabs = ", tabArray);
  });
}

chrome.windows.getCurrent({ populate: true }, (currentWindow) => {
  getTabArray();
});

chrome.tabs.onCreated.addListener(getTabArray);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && changeInfo.url) {
    // console.log(`Tab: ${tabId} URL changed to ${changeInfo.url}`);
    getTabArray();
  }
});

chrome.storage.onChanged.addListener((changes, namespace) => {
  // Check if tabArray has changed
  if (changes.tabArray) {
    // Call getTabArray to send updated tabArray to content script
    getTabArray();
  }
});

chrome.tabs.onRemoved.addListener((id) => {
  console.log("removal logged in background", id);
  chrome.storage.local.get(["returnedTabs"], (result) => {
    const { returnedTabs } = result;
    const updatedTabs = returnedTabs.filter((tab) => tab.id !== id);
    chrome.storage.local.set({ returnedTabs: updatedTabs });
  });
});

//i get it, meant to udpate the list before storing back in storage.

// //https://www.youtube.com/watch?v=olLXAFJiL6Q

chrome.runtime.onInstalled.addListener(() => {
  console.log("Background script is running after installed");
});
console.log("Background script is running"); // okay this works

getTabArray();

chrome.storage.local.get(["returnedTabs"], (result) => {
  const tabArray = result.returnedTabs || [];

  // Send the data to the content script of all tabs
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, { tabArray: tabArray });
    });
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.tabData) {
    console.log("Received message from button:", message.tabData);
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("recieved? ", sender);
  if (request.action === "getData") {
    chrome.storage.local.get("returnedTabs", function (data) {
      sendResponse({ data: data.returnedTabs });
    });
    return true;
  }
});
