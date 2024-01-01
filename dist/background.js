/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

//can make smth that tracks in the console what the urls 
//are of the tabs that open new i think that is good enough for now
chrome.tabs.onActivated.addListener(function () {
    chrome.tabs.query({ active: false, currentWindow: true }, function (tabs) {
        // console.log(chrome.tabs);
        var tabArray = tabs.map(function (tab) { return ({
            id: tab.id,
            title: tab.title,
            url: tab.url,
            favIcon: tab.favIconUrl
        }); });
        //onUpdated + onCreated 
        chrome.storage.local.set({ returnedTabs: tabArray });
        console.log("tabs= " + tabs);
        console.log("savedTabs = " + tabArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBLG1DQUFtQyx3QkFBd0I7QUFDM0Q7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJvaG9saWN2M3dlYnBhY2svLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy9jYW4gbWFrZSBzbXRoIHRoYXQgdHJhY2tzIGluIHRoZSBjb25zb2xlIHdoYXQgdGhlIHVybHMgXG4vL2FyZSBvZiB0aGUgdGFicyB0aGF0IG9wZW4gbmV3IGkgdGhpbmsgdGhhdCBpcyBnb29kIGVub3VnaCBmb3Igbm93XG5jaHJvbWUudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoKSB7XG4gICAgY2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IGZhbHNlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sIGZ1bmN0aW9uICh0YWJzKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGNocm9tZS50YWJzKTtcbiAgICAgICAgdmFyIHRhYkFycmF5ID0gdGFicy5tYXAoZnVuY3Rpb24gKHRhYikgeyByZXR1cm4gKHtcbiAgICAgICAgICAgIGlkOiB0YWIuaWQsXG4gICAgICAgICAgICB0aXRsZTogdGFiLnRpdGxlLFxuICAgICAgICAgICAgdXJsOiB0YWIudXJsLFxuICAgICAgICAgICAgZmF2SWNvbjogdGFiLmZhdkljb25VcmxcbiAgICAgICAgfSk7IH0pO1xuICAgICAgICAvL29uVXBkYXRlZCArIG9uQ3JlYXRlZCBcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcmV0dXJuZWRUYWJzOiB0YWJBcnJheSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0YWJzPSBcIiArIHRhYnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInNhdmVkVGFicyA9IFwiICsgdGFiQXJyYXkpO1xuICAgIH0pO1xufSk7XG4vL2NvbnNvbGUubG9nKHRhYkFycmF5KTtcbi8vIH0pXG4vL2NvbnN0IHRhYlVSTHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJVUkxzJykpO1xuLy90aGUgb2JqZWN0IGlzIHRhYnMsIGVhY2ggZWxlbWVudCBpcyBvZiB0eXBlIHRhYixcbi8vIGNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGV4dGVuc2lvbkNsaWNrZWQpO1xuLy8gZnVuY3Rpb24gZXh0ZW5zaW9uQ2xpY2tlZCh0YWIpIHsgLy9jYWxsIGJhY2sgXG4vLyAgICAgbGV0IG1zZyA9IHtcbi8vICAgICAgICAgdGV4dDogXCJoZWxwXCJcbi8vICAgICB9XG4vLyAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpXG4vLyB9XG4vLyBjaHJvbWUudGFicy5xdWVyeSh7fSwgKHRhYnMpID0+IHtcbi8vICAgICBmb3IoY29uc3QgdGFiIG9mIHRhYnMpXG4vLyAgICAge1xuLy8gICAgICAgICB0YWJBcnJheS5wdXNoKHRhYi51cmwpO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyh0YWJzKVxuLy8gICAgIHRhYkFycmF5ID0gW3RhYnNdO1xuLy8gICAgIC8vcmV0dXJuIHRhYkFycmF5O1xuLy8gICAgIC8vICB0YWJBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgIC8vICAgY29uc29sZS5sb2codGFiQXJyYXlbMF1bMV0uZmF2SWNvblVybCk7XG4vLyAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhYlVSTHMnLCBKU09OLnN0cmluZ2lmeSh0YWJBcnJheSkpO1xuLy8gfSk7XG4vLyAgICBjb25zb2xlLmxvZyhcInllbHBcIilcbi8vICB9XG4vL2xvb2sgaW50byBmcmFtZXdvcmtzXG4vL09iaiAgIEhhc2hNYXBcbi8vW3RhYl1bU3RyaW5nOlN0cmluZ10gXG4vL31cbi8vIC8vaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1vbExYQUZKaUw2UVxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQmFja2dyb3VuZCBzY3JpcHQgaXMgcnVubmluZyBhZnRlciBpbnN0YWxsZWRcIik7XG59KTtcbmNvbnNvbGUubG9nKFwiQmFja2dyb3VuZCBzY3JpcHQgaXMgcnVubmluZ1wiKTsgLy8gb2theSB0aGlzIHdvcmtzXG4vL21heWJlIGNhbiBkbyBzbXRoIGxpa2UgY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCgpID0+XG4vL2NvbnNvbGUubG9nKFwidGFiIG9wZW5lZFwiKVxuLy8pICB1IGNhbiBkbyB0aGF0IHNsYXkgYmJ5IFxuLy8gICAgIC8vbG9vayBpbnRvIGZyYW1ld29ya3Ncbi8vICAgICAvL09iaiAgIEhhc2hNYXBcbi8vICAgICAvL1t0YWJdW1N0cmluZzpTdHJpbmddIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9