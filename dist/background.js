/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

//can make smth that tracks in the console what the urls 
//are of the tabs that open new i think that is good enough for now
chrome.tabs.onUpdated.addListener(function () {
    chrome.tabs.query({ active: false, currentWindow: true }, function (tabs) {
        var tabArray = tabs.map(function (tab) { return ({
            url: tab.url,
            favIcon: tab.favIconUrl
        }); });
        console.log(tabs);
        console.log(tabArray);
        chrome.storage.local.set({ returnedTabs: tabArray });
    });
});
//console.log(tabArray);
// })
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
chrome.runtime.onInstalled.addListener(function () {
    console.log("Background script is running after installed");
});
console.log("Background script is running"); // okay this works
//maybe can do smth like chrome.tabs.onCreated.addListener(() =>
//console.log("tab opened")
//)  u can do that slay bby 
//     //look into frameworks
//     //Obj   HashMap
//     //[tab][String:String] 

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRCxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFib2hvbGljdjN3ZWJwYWNrLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vY2FuIG1ha2Ugc210aCB0aGF0IHRyYWNrcyBpbiB0aGUgY29uc29sZSB3aGF0IHRoZSB1cmxzIFxuLy9hcmUgb2YgdGhlIHRhYnMgdGhhdCBvcGVuIG5ldyBpIHRoaW5rIHRoYXQgaXMgZ29vZCBlbm91Z2ggZm9yIG5vd1xuY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICBjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogZmFsc2UsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgZnVuY3Rpb24gKHRhYnMpIHtcbiAgICAgICAgdmFyIHRhYkFycmF5ID0gdGFicy5tYXAoZnVuY3Rpb24gKHRhYikgeyByZXR1cm4gKHtcbiAgICAgICAgICAgIHVybDogdGFiLnVybCxcbiAgICAgICAgICAgIGZhdkljb246IHRhYi5mYXZJY29uVXJsXG4gICAgICAgIH0pOyB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGFicyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhYkFycmF5KTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmV0dXJuZWRUYWJzOiB0YWJBcnJheSB9KTtcbiAgICB9KTtcbn0pO1xuLy9jb25zb2xlLmxvZyh0YWJBcnJheSk7XG4vLyB9KVxuLy9jb25zdCB0YWJVUkxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFiVVJMcycpKTtcbi8vdGhlIG9iamVjdCBpcyB0YWJzLCBlYWNoIGVsZW1lbnQgaXMgb2YgdHlwZSB0YWIsXG4vLyBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihleHRlbnNpb25DbGlja2VkKTtcbi8vIGZ1bmN0aW9uIGV4dGVuc2lvbkNsaWNrZWQodGFiKSB7IC8vY2FsbCBiYWNrIFxuLy8gICAgIGxldCBtc2cgPSB7XG4vLyAgICAgICAgIHRleHQ6IFwiaGVscFwiXG4vLyAgICAgfVxuLy8gICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKVxuLy8gfVxuLy8gY2hyb21lLnRhYnMucXVlcnkoe30sICh0YWJzKSA9PiB7XG4vLyAgICAgZm9yKGNvbnN0IHRhYiBvZiB0YWJzKVxuLy8gICAgIHtcbi8vICAgICAgICAgdGFiQXJyYXkucHVzaCh0YWIudXJsKTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2codGFicylcbi8vICAgICB0YWJBcnJheSA9IFt0YWJzXTtcbi8vICAgICAvL3JldHVybiB0YWJBcnJheTtcbi8vICAgICAvLyAgdGFiQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAvLyAgIGNvbnNvbGUubG9nKHRhYkFycmF5WzBdWzFdLmZhdkljb25VcmwpO1xuLy8gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJVUkxzJywgSlNPTi5zdHJpbmdpZnkodGFiQXJyYXkpKTtcbi8vIH0pO1xuLy8gICAgY29uc29sZS5sb2coXCJ5ZWxwXCIpXG4vLyAgfVxuLy9sb29rIGludG8gZnJhbWV3b3Jrc1xuLy9PYmogICBIYXNoTWFwXG4vL1t0YWJdW1N0cmluZzpTdHJpbmddIFxuLy99XG4vLyAvL2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9b2xMWEFGSmlMNlFcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkJhY2tncm91bmQgc2NyaXB0IGlzIHJ1bm5pbmcgYWZ0ZXIgaW5zdGFsbGVkXCIpO1xufSk7XG5jb25zb2xlLmxvZyhcIkJhY2tncm91bmQgc2NyaXB0IGlzIHJ1bm5pbmdcIik7IC8vIG9rYXkgdGhpcyB3b3Jrc1xuLy9tYXliZSBjYW4gZG8gc210aCBsaWtlIGNocm9tZS50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigoKSA9PlxuLy9jb25zb2xlLmxvZyhcInRhYiBvcGVuZWRcIilcbi8vKSAgdSBjYW4gZG8gdGhhdCBzbGF5IGJieSBcbi8vICAgICAvL2xvb2sgaW50byBmcmFtZXdvcmtzXG4vLyAgICAgLy9PYmogICBIYXNoTWFwXG4vLyAgICAgLy9bdGFiXVtTdHJpbmc6U3RyaW5nXSBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==