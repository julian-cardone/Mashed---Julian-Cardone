/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const {\n  default: Example\n} = __webpack_require__(/*! ./scripts/example.js */ \"./src/scripts/example.js\");\nconst {\n  default: AudioFetch\n} = __webpack_require__(/*! ./scripts/audio_fetch.js */ \"./src/scripts/audio_fetch.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const main = document.getElementById(\"main\");\n  new Example(main);\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const playback = document.getElementById(\"playback\");\n  new AudioFetch(playback);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtFQUFFQSxPQUFPLEVBQUVDO0FBQVEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLHNEQUFzQixDQUFDO0FBQzVELE1BQU07RUFBRUYsT0FBTyxFQUFFRztBQUFXLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyw4REFBMEIsQ0FBQztBQUVuRUUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLElBQUlOLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGRixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDaEQsTUFBTUcsUUFBUSxHQUFHSixRQUFRLENBQUNHLGNBQWMsQ0FBQyxVQUFVLENBQUM7RUFDcEQsSUFBSUosVUFBVSxDQUFDSyxRQUFRLENBQUM7QUFDNUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgZGVmYXVsdDogRXhhbXBsZSB9ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9leGFtcGxlLmpzXCIpO1xuY29uc3QgeyBkZWZhdWx0OiBBdWRpb0ZldGNoIH0gPSByZXF1aXJlKFwiLi9zY3JpcHRzL2F1ZGlvX2ZldGNoLmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgICBuZXcgRXhhbXBsZShtYWluKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgcGxheWJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXliYWNrXCIpO1xuICAgIG5ldyBBdWRpb0ZldGNoKHBsYXliYWNrKTtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJFeGFtcGxlIiwicmVxdWlyZSIsIkF1ZGlvRmV0Y2giLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5YmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/audio_fetch.js":
/*!************************************!*\
  !*** ./src/scripts/audio_fetch.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import { construct } from \"core-js/fn/reflect\";\n\nclass AudioFetch {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h2>click to fetch and play</h2>\";\n    this.ele.addEventListener(\"click\", this.fetchNPlay.bind(this));\n  }\n  fetchNPlay() {\n    // const AudioContext = window.AudioContext || window.webkitAudioContext;\n    const ctx = new AudioContext();\n    let audio;\n    fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3').then(data => data.arrayBuffer()).then(arrayBuffer => ctx.decodeAudioData(arrayBuffer)).then(decodedAudio => {\n      audio = decodedAudio;\n    });\n    console.log(audio);\n    //^^fetch aduio file, put into buffer, decode it tobe able\n    //towork with it as anaudio node\n    const playSound = ctx.createBufferSource();\n    playSound.buffer = audio;\n    playSound.connect(ctx.destination);\n    playSound.start(ctx.currentTime);\n    console.log(ctx);\n    this.ele.innerHTML = \"<h2>playing...</h2>\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (AudioFetch);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hdWRpb19mZXRjaC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUEsTUFBTUEsVUFBVSxDQUFDO0VBRWJDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLGtDQUFrQztJQUN2RCxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0MsVUFBVSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDbEU7RUFFQUQsVUFBVSxHQUFFO0lBQ1I7SUFDQSxNQUFNRSxHQUFHLEdBQUcsSUFBSUMsWUFBWSxFQUFFO0lBRTlCLElBQUlDLEtBQUs7SUFFVEMsS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQzlFQyxJQUFJLENBQUNDLElBQUksSUFBSUEsSUFBSSxDQUFDQyxXQUFXLEVBQUUsQ0FBQyxDQUNoQ0YsSUFBSSxDQUFDRSxXQUFXLElBQUlOLEdBQUcsQ0FBQ08sZUFBZSxDQUFDRCxXQUFXLENBQUMsQ0FBQyxDQUNyREYsSUFBSSxDQUFDSSxZQUFZLElBQUk7TUFDbEJOLEtBQUssR0FBR00sWUFBWTtJQUN4QixDQUFDLENBQUM7SUFDRkMsT0FBTyxDQUFDQyxHQUFHLENBQUNSLEtBQUssQ0FBQztJQUN0QjtJQUNBO0lBQ0EsTUFBTVMsU0FBUyxHQUFHWCxHQUFHLENBQUNZLGtCQUFrQixFQUFFO0lBQzFDRCxTQUFTLENBQUNFLE1BQU0sR0FBR1gsS0FBSztJQUN4QlMsU0FBUyxDQUFDRyxPQUFPLENBQUNkLEdBQUcsQ0FBQ2UsV0FBVyxDQUFDO0lBQ2xDSixTQUFTLENBQUNLLEtBQUssQ0FBQ2hCLEdBQUcsQ0FBQ2lCLFdBQVcsQ0FBQztJQUVoQ1IsT0FBTyxDQUFDQyxHQUFHLENBQUNWLEdBQUcsQ0FBQztJQUVoQixJQUFJLENBQUNMLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHFCQUFxQjtFQUM5QztBQUNKO0FBRUEsK0RBQWVILFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL3NjcmlwdHMvYXVkaW9fZmV0Y2guanM/ZGNmNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjb25zdHJ1Y3QgfSBmcm9tIFwiY29yZS1qcy9mbi9yZWZsZWN0XCI7XG5cbmNsYXNzIEF1ZGlvRmV0Y2gge1xuXG4gICAgY29uc3RydWN0b3IoZWxlKXtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgyPmNsaWNrIHRvIGZldGNoIGFuZCBwbGF5PC9oMj5cIlxuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5mZXRjaE5QbGF5LmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIGZldGNoTlBsYXkoKXtcbiAgICAgICAgLy8gY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuICAgICAgICBjb25zdCBjdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICAgICAgbGV0IGF1ZGlvO1xuXG4gICAgICAgIGZldGNoKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xMjM5NDEvWW9kZWxfU291bmRfRWZmZWN0Lm1wMycpXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IGN0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWZmZXIpKVxuICAgICAgICAgICAgLnRoZW4oZGVjb2RlZEF1ZGlvID0+IHtcbiAgICAgICAgICAgICAgICBhdWRpbyA9IGRlY29kZWRBdWRpbztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYXVkaW8pO1xuICAgICAgICAvL15eZmV0Y2ggYWR1aW8gZmlsZSwgcHV0IGludG8gYnVmZmVyLCBkZWNvZGUgaXQgdG9iZSBhYmxlXG4gICAgICAgIC8vdG93b3JrIHdpdGggaXQgYXMgYW5hdWRpbyBub2RlXG4gICAgICAgIGNvbnN0IHBsYXlTb3VuZCA9IGN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbiAgICAgICAgcGxheVNvdW5kLmJ1ZmZlciA9IGF1ZGlvO1xuICAgICAgICBwbGF5U291bmQuY29ubmVjdChjdHguZGVzdGluYXRpb24pO1xuICAgICAgICBwbGF5U291bmQuc3RhcnQoY3R4LmN1cnJlbnRUaW1lKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjdHgpO1xuXG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgyPnBsYXlpbmcuLi48L2gyPlwiXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb0ZldGNoOyJdLCJuYW1lcyI6WyJBdWRpb0ZldGNoIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiZmV0Y2hOUGxheSIsImJpbmQiLCJjdHgiLCJBdWRpb0NvbnRleHQiLCJhdWRpbyIsImZldGNoIiwidGhlbiIsImRhdGEiLCJhcnJheUJ1ZmZlciIsImRlY29kZUF1ZGlvRGF0YSIsImRlY29kZWRBdWRpbyIsImNvbnNvbGUiLCJsb2ciLCJwbGF5U291bmQiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJidWZmZXIiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJzdGFydCIsImN1cnJlbnRUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/audio_fetch.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFDQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBVyxDQUFDQyxHQUFHLEVBQUM7SUFDWixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxTQUFTLEdBQUcsd0JBQXdCO0lBRTdDLElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNuRTtFQUVBRCxXQUFXLEdBQUU7SUFDVCxJQUFJLENBQUNILEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsT0FBTztFQUU1QztBQUNKO0FBRUEsK0RBQWVSLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL3NjcmlwdHMvZXhhbXBsZS5qcz9mY2VlIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlKXtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkl0J3MgQUxJVkUhISE8L2gxPlwiXG5cbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soKXtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoIVwiO1xuXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJjb25zdHJ1Y3RvciIsImVsZSIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDbGljayIsImJpbmQiLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;