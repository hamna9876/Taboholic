/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

//can make smth that tracks in the console what the urls 
//are of the tabs that open new i think that is good enough for now
chrome.runtime.onInstalled.addListener(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQSxTQUFTLElBQUk7QUFDYjtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRCxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFib2hvbGljdjN3ZWJwYWNrLy4vc3JjL2JhY2tncm91bmQvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vY2FuIG1ha2Ugc210aCB0aGF0IHRyYWNrcyBpbiB0aGUgY29uc29sZSB3aGF0IHRoZSB1cmxzIFxuLy9hcmUgb2YgdGhlIHRhYnMgdGhhdCBvcGVuIG5ldyBpIHRoaW5rIHRoYXQgaXMgZ29vZCBlbm91Z2ggZm9yIG5vd1xuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgIGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiBmYWxzZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCBmdW5jdGlvbiAodGFicykge1xuICAgICAgICB2YXIgdGFiQXJyYXkgPSB0YWJzLm1hcChmdW5jdGlvbiAodGFiKSB7IHJldHVybiAoe1xuICAgICAgICAgICAgdXJsOiB0YWIudXJsLFxuICAgICAgICAgICAgZmF2SWNvbjogdGFiLmZhdkljb25VcmxcbiAgICAgICAgfSk7IH0pO1xuICAgICAgICBjb25zb2xlLmxvZyh0YWJzKTtcbiAgICAgICAgY29uc29sZS5sb2codGFiQXJyYXkpO1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyByZXR1cm5lZFRhYnM6IHRhYkFycmF5IH0pO1xuICAgIH0pO1xufSk7XG4vL2NvbnNvbGUubG9nKHRhYkFycmF5KTtcbi8vIH0pXG4vL2NvbnN0IHRhYlVSTHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJVUkxzJykpO1xuLy90aGUgb2JqZWN0IGlzIHRhYnMsIGVhY2ggZWxlbWVudCBpcyBvZiB0eXBlIHRhYixcbi8vIGNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGV4dGVuc2lvbkNsaWNrZWQpO1xuLy8gZnVuY3Rpb24gZXh0ZW5zaW9uQ2xpY2tlZCh0YWIpIHsgLy9jYWxsIGJhY2sgXG4vLyAgICAgbGV0IG1zZyA9IHtcbi8vICAgICAgICAgdGV4dDogXCJoZWxwXCJcbi8vICAgICB9XG4vLyAgICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCBtc2cpXG4vLyB9XG4vLyBjaHJvbWUudGFicy5xdWVyeSh7fSwgKHRhYnMpID0+IHtcbi8vICAgICBmb3IoY29uc3QgdGFiIG9mIHRhYnMpXG4vLyAgICAge1xuLy8gICAgICAgICB0YWJBcnJheS5wdXNoKHRhYi51cmwpO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZyh0YWJzKVxuLy8gICAgIHRhYkFycmF5ID0gW3RhYnNdO1xuLy8gICAgIC8vcmV0dXJuIHRhYkFycmF5O1xuLy8gICAgIC8vICB0YWJBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgIC8vICAgY29uc29sZS5sb2codGFiQXJyYXlbMF1bMV0uZmF2SWNvblVybCk7XG4vLyAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RhYlVSTHMnLCBKU09OLnN0cmluZ2lmeSh0YWJBcnJheSkpO1xuLy8gfSk7XG4vLyAgICBjb25zb2xlLmxvZyhcInllbHBcIilcbi8vICB9XG4vL2xvb2sgaW50byBmcmFtZXdvcmtzXG4vL09iaiAgIEhhc2hNYXBcbi8vW3RhYl1bU3RyaW5nOlN0cmluZ10gXG4vL31cbi8vIC8vaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1vbExYQUZKaUw2UVxuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQmFja2dyb3VuZCBzY3JpcHQgaXMgcnVubmluZyBhZnRlciBpbnN0YWxsZWRcIik7XG59KTtcbmNvbnNvbGUubG9nKFwiQmFja2dyb3VuZCBzY3JpcHQgaXMgcnVubmluZ1wiKTsgLy8gb2theSB0aGlzIHdvcmtzXG4vL21heWJlIGNhbiBkbyBzbXRoIGxpa2UgY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCgpID0+XG4vL2NvbnNvbGUubG9nKFwidGFiIG9wZW5lZFwiKVxuLy8pICB1IGNhbiBkbyB0aGF0IHNsYXkgYmJ5IFxuLy8gICAgIC8vbG9vayBpbnRvIGZyYW1ld29ya3Ncbi8vICAgICAvL09iaiAgIEhhc2hNYXBcbi8vICAgICAvL1t0YWJdW1N0cmluZzpTdHJpbmddIFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9