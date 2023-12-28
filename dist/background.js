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
            id: tab.id,
            title: tab.title,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJO0FBQ2I7QUFDQTtBQUNBLG1DQUFtQyx3QkFBd0I7QUFDM0QsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RhYm9ob2xpY3Yzd2VicGFjay8uL3NyYy9iYWNrZ3JvdW5kL2JhY2tncm91bmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4vL2NhbiBtYWtlIHNtdGggdGhhdCB0cmFja3MgaW4gdGhlIGNvbnNvbGUgd2hhdCB0aGUgdXJscyBcbi8vYXJlIG9mIHRoZSB0YWJzIHRoYXQgb3BlbiBuZXcgaSB0aGluayB0aGF0IGlzIGdvb2QgZW5vdWdoIGZvciBub3dcbmNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IGZhbHNlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIHZhciB0YWJBcnJheSA9IHRhYnMubWFwKGZ1bmN0aW9uICh0YWIpIHsgcmV0dXJuICh7XG4gICAgICAgICAgICBpZDogdGFiLmlkLFxuICAgICAgICAgICAgdGl0bGU6IHRhYi50aXRsZSxcbiAgICAgICAgICAgIHVybDogdGFiLnVybCxcbiAgICAgICAgICAgIGZhdkljb246IHRhYi5mYXZJY29uVXJsXG4gICAgICAgIH0pOyB9KTtcbiAgICAgICAgY29uc29sZS5sb2codGFicyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRhYkFycmF5KTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmV0dXJuZWRUYWJzOiB0YWJBcnJheSB9KTtcbiAgICB9KTtcbn0pO1xuLy9jb25zb2xlLmxvZyh0YWJBcnJheSk7XG4vLyB9KVxuLy9jb25zdCB0YWJVUkxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFiVVJMcycpKTtcbi8vdGhlIG9iamVjdCBpcyB0YWJzLCBlYWNoIGVsZW1lbnQgaXMgb2YgdHlwZSB0YWIsXG4vLyBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihleHRlbnNpb25DbGlja2VkKTtcbi8vIGZ1bmN0aW9uIGV4dGVuc2lvbkNsaWNrZWQodGFiKSB7IC8vY2FsbCBiYWNrIFxuLy8gICAgIGxldCBtc2cgPSB7XG4vLyAgICAgICAgIHRleHQ6IFwiaGVscFwiXG4vLyAgICAgfVxuLy8gICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKVxuLy8gfVxuLy8gY2hyb21lLnRhYnMucXVlcnkoe30sICh0YWJzKSA9PiB7XG4vLyAgICAgZm9yKGNvbnN0IHRhYiBvZiB0YWJzKVxuLy8gICAgIHtcbi8vICAgICAgICAgdGFiQXJyYXkucHVzaCh0YWIudXJsKTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2codGFicylcbi8vICAgICB0YWJBcnJheSA9IFt0YWJzXTtcbi8vICAgICAvL3JldHVybiB0YWJBcnJheTtcbi8vICAgICAvLyAgdGFiQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAvLyAgIGNvbnNvbGUubG9nKHRhYkFycmF5WzBdWzFdLmZhdkljb25VcmwpO1xuLy8gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJVUkxzJywgSlNPTi5zdHJpbmdpZnkodGFiQXJyYXkpKTtcbi8vIH0pO1xuLy8gICAgY29uc29sZS5sb2coXCJ5ZWxwXCIpXG4vLyAgfVxuLy9sb29rIGludG8gZnJhbWV3b3Jrc1xuLy9PYmogICBIYXNoTWFwXG4vL1t0YWJdW1N0cmluZzpTdHJpbmddIFxuLy99XG4vLyAvL2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9b2xMWEFGSmlMNlFcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkJhY2tncm91bmQgc2NyaXB0IGlzIHJ1bm5pbmcgYWZ0ZXIgaW5zdGFsbGVkXCIpO1xufSk7XG5jb25zb2xlLmxvZyhcIkJhY2tncm91bmQgc2NyaXB0IGlzIHJ1bm5pbmdcIik7IC8vIG9rYXkgdGhpcyB3b3Jrc1xuLy9tYXliZSBjYW4gZG8gc210aCBsaWtlIGNocm9tZS50YWJzLm9uQ3JlYXRlZC5hZGRMaXN0ZW5lcigoKSA9PlxuLy9jb25zb2xlLmxvZyhcInRhYiBvcGVuZWRcIilcbi8vKSAgdSBjYW4gZG8gdGhhdCBzbGF5IGJieSBcbi8vICAgICAvL2xvb2sgaW50byBmcmFtZXdvcmtzXG4vLyAgICAgLy9PYmogICBIYXNoTWFwXG4vLyAgICAgLy9bdGFiXVtTdHJpbmc6U3RyaW5nXSBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==