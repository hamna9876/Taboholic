function getTabArray() {
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
}

chrome.tabs.onCreated.addListener(getTabArray);

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && changeInfo.url) {
    console.log(`Tab: ${tabId} URL changed to ${changeInfo.url}`);
  }
  getTabArray();
});
//maybe create listeners for all events, created, deleted, onupdated.

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
