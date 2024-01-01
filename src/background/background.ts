//can make smth that tracks in the console what the urls 
//are of the tabs that open new i think that is good enough for now


chrome.tabs.onActivated.addListener(() => {
    chrome.tabs.query({currentWindow:true}, (tabs) => {

      // console.log(chrome.tabs);
      const tabArray = tabs.map(tab => ({
        id: tab.id,
        title:tab.title,
        url: tab.url,
        favIcon: tab.favIconUrl
      }));
        
        chrome.storage.local.set({ returnedTabs : tabArray});
        for (let index = 0; index < tabArray.length; index++) {
          console.log("tabs= " + tabArray[index].title);
        }
        
        console.log("savedTabs = " + tabArray);
        console.log("testing");
    });
})



//const tabURLs = JSON.parse(localStorage.getItem('tabURLs'));
//the object is tabs, each element is of type tab,


// chrome.action.onClicked.addListener(extensionClicked);

// function extensionClicked(tab) { //call back 
//     let msg = {
//         text: "help"
//     }
//     chrome.tabs.sendMessage(tab.id, msg)
// }


    // chrome.tabs.query({}, (tabs) => {
    //     for(const tab of tabs)
    //     {
    //         tabArray.push(tab.url);
    //     }
    //     console.log(tabs)
    //     tabArray = [tabs];
    //     //return tabArray;
    //     //  tabArray.forEach(element => {
    //     //   console.log(tabArray[0][1].favIconUrl);
    //  localStorage.setItem('tabURLs', JSON.stringify(tabArray));
        // });
    //    console.log("yelp")
  //  }

    //look into frameworks
    //Obj   HashMap
    //[tab][String:String] 

//}

// //https://www.youtube.com/watch?v=olLXAFJiL6Q

chrome.runtime.onInstalled.addListener(() => {
  console.log("Background script is running after installed");
})
console.log("Background script is running"); // okay this works

//maybe can do smth like chrome.tabs.onCreated.addListener(() =>
    //console.log("tab opened")
//)  u can do that slay bby 


//     //look into frameworks
//     //Obj   HashMap
//     //[tab][String:String] 