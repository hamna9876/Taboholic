/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

//const tabArray = []; 
//can make smth that tracks in the console what the urls 
//are of the tabs that open new i think that is good enough for now
// chrome.runtime.onInstalled.addListener(() => {
//     chrome.tabs.query({active:false, currentWindow:true}, (tabs) => {
//         for(const tab of tabs)
//         {
//             tabArray.push(tab.url);
//         }
//         console.log(tabs)
//         tabArray = [tabs];
//         //return tabArray;
//         //  tabArray.forEach(element => {
//         //   console.log(tabArray[0][1].favIconUrl);
//      localStorage.setItem('tabURLs', JSON.stringify(tabArray));
//         // });
//     })
//     //look into frameworks
//     //Obj   HashMap
//     //[tab][String:String] 
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlDQUFpQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCw2Q0FBNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWJvaG9saWN2M3dlYnBhY2svLi9zcmMvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuLy9jb25zdCB0YWJBcnJheSA9IFtdOyBcbi8vY2FuIG1ha2Ugc210aCB0aGF0IHRyYWNrcyBpbiB0aGUgY29uc29sZSB3aGF0IHRoZSB1cmxzIFxuLy9hcmUgb2YgdGhlIHRhYnMgdGhhdCBvcGVuIG5ldyBpIHRoaW5rIHRoYXQgaXMgZ29vZCBlbm91Z2ggZm9yIG5vd1xuLy8gY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKCkgPT4ge1xuLy8gICAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6ZmFsc2UsIGN1cnJlbnRXaW5kb3c6dHJ1ZX0sICh0YWJzKSA9PiB7XG4vLyAgICAgICAgIGZvcihjb25zdCB0YWIgb2YgdGFicylcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgICAgdGFiQXJyYXkucHVzaCh0YWIudXJsKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0YWJzKVxuLy8gICAgICAgICB0YWJBcnJheSA9IFt0YWJzXTtcbi8vICAgICAgICAgLy9yZXR1cm4gdGFiQXJyYXk7XG4vLyAgICAgICAgIC8vICB0YWJBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgICAgICAvLyAgIGNvbnNvbGUubG9nKHRhYkFycmF5WzBdWzFdLmZhdkljb25VcmwpO1xuLy8gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFiVVJMcycsIEpTT04uc3RyaW5naWZ5KHRhYkFycmF5KSk7XG4vLyAgICAgICAgIC8vIH0pO1xuLy8gICAgIH0pXG4vLyAgICAgLy9sb29rIGludG8gZnJhbWV3b3Jrc1xuLy8gICAgIC8vT2JqICAgSGFzaE1hcFxuLy8gICAgIC8vW3RhYl1bU3RyaW5nOlN0cmluZ10gXG4vLyB9KVxuLy9jb25zdCB0YWJVUkxzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFiVVJMcycpKTtcbi8vdGhlIG9iamVjdCBpcyB0YWJzLCBlYWNoIGVsZW1lbnQgaXMgb2YgdHlwZSB0YWIsXG4vLyBjaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihleHRlbnNpb25DbGlja2VkKTtcbi8vIGZ1bmN0aW9uIGV4dGVuc2lvbkNsaWNrZWQodGFiKSB7IC8vY2FsbCBiYWNrIFxuLy8gICAgIGxldCBtc2cgPSB7XG4vLyAgICAgICAgIHRleHQ6IFwiaGVscFwiXG4vLyAgICAgfVxuLy8gICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwgbXNnKVxuLy8gfVxuLy8gY2hyb21lLnRhYnMucXVlcnkoe30sICh0YWJzKSA9PiB7XG4vLyAgICAgZm9yKGNvbnN0IHRhYiBvZiB0YWJzKVxuLy8gICAgIHtcbi8vICAgICAgICAgdGFiQXJyYXkucHVzaCh0YWIudXJsKTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2codGFicylcbi8vICAgICB0YWJBcnJheSA9IFt0YWJzXTtcbi8vICAgICAvL3JldHVybiB0YWJBcnJheTtcbi8vICAgICAvLyAgdGFiQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAvLyAgIGNvbnNvbGUubG9nKHRhYkFycmF5WzBdWzFdLmZhdkljb25VcmwpO1xuLy8gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWJVUkxzJywgSlNPTi5zdHJpbmdpZnkodGFiQXJyYXkpKTtcbi8vIH0pO1xuLy8gICAgY29uc29sZS5sb2coXCJ5ZWxwXCIpXG4vLyAgfVxuLy9sb29rIGludG8gZnJhbWV3b3Jrc1xuLy9PYmogICBIYXNoTWFwXG4vL1t0YWJdW1N0cmluZzpTdHJpbmddIFxuLy99XG4vLyAvL2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9b2xMWEFGSmlMNlFcbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZyhcIkJhY2tncm91bmQgc2NyaXB0IGlzIHJ1bm5pbmcgYWZ0ZXIgaW5zdGFsbGVkXCIpO1xufSk7XG5jb25zb2xlLmxvZyhcIkJhY2tncm91bmQgc2NyaXB0IGlzIHJ1bm5pbmdcIik7IC8vIG9rYXkgdGhpcyB3b3Jrc1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9