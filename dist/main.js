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

eval("// const { default: PlaybackButton } = require(\"./scripts/play_button.js\");\nconst {\n  default: FetchInstrumental\n} = __webpack_require__(/*! ./scripts/fetch_instrumental.js */ \"./src/scripts/fetch_instrumental.js\");\nconst {\n  default: FetchVocal\n} = __webpack_require__(/*! ./scripts/fetch_vocal.js */ \"./src/scripts/fetch_vocal.js\");\n\n// document.addEventListener(\"DOMContentLoaded\", ()=>{\n//     const playing = document.getElementById(\"play/pause\");\n//     new PlaybackButton(playing);\n// })\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const instrumental = document.querySelector(\".instrumentals\");\n  const playing = document.getElementById(\"play/pause\");\n  new FetchInstrumental(instrumental, playing);\n  // console.log(instrumental);\n});\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const instrumental = document.querySelector(\".vocals\");\n  const playing = document.getElementById(\"play/pause_vocals\");\n  new FetchVocal(instrumental, playing);\n  // console.log(instrumental);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNO0VBQUVBLE9BQU8sRUFBRUM7QUFBa0IsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLDRFQUFpQyxDQUFDO0FBQ2pGLE1BQU07RUFBRUYsT0FBTyxFQUFFRztBQUFXLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyw4REFBMEIsQ0FBQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7O0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBSTtFQUM5QyxNQUFNQyxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGdCQUFnQixDQUFDO0VBQzdELE1BQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ3JELElBQUlSLGlCQUFpQixDQUFDSyxZQUFZLEVBQUVFLE9BQU8sQ0FBQztFQUM1QztBQUNKLENBQUMsQ0FBQzs7QUFFRkosUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFJO0VBQzlDLE1BQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ3RELE1BQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxjQUFjLENBQUMsbUJBQW1CLENBQUM7RUFDNUQsSUFBSU4sVUFBVSxDQUFDRyxZQUFZLEVBQUVFLE9BQU8sQ0FBQztFQUNyQztBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IGRlZmF1bHQ6IFBsYXliYWNrQnV0dG9uIH0gPSByZXF1aXJlKFwiLi9zY3JpcHRzL3BsYXlfYnV0dG9uLmpzXCIpO1xuY29uc3QgeyBkZWZhdWx0OiBGZXRjaEluc3RydW1lbnRhbCB9ID0gcmVxdWlyZShcIi4vc2NyaXB0cy9mZXRjaF9pbnN0cnVtZW50YWwuanNcIik7XG5jb25zdCB7IGRlZmF1bHQ6IEZldGNoVm9jYWwgfSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZmV0Y2hfdm9jYWwuanNcIik7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4vLyAgICAgY29uc3QgcGxheWluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS9wYXVzZVwiKTtcbi8vICAgICBuZXcgUGxheWJhY2tCdXR0b24ocGxheWluZyk7XG4vLyB9KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgIGNvbnN0IGluc3RydW1lbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1bWVudGFsc1wiKTtcbiAgICBjb25zdCBwbGF5aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5L3BhdXNlXCIpO1xuICAgIG5ldyBGZXRjaEluc3RydW1lbnRhbChpbnN0cnVtZW50YWwsIHBsYXlpbmcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGluc3RydW1lbnRhbCk7XG59KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgIGNvbnN0IGluc3RydW1lbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9jYWxzXCIpO1xuICAgIGNvbnN0IHBsYXlpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXkvcGF1c2Vfdm9jYWxzXCIpO1xuICAgIG5ldyBGZXRjaFZvY2FsKGluc3RydW1lbnRhbCwgcGxheWluZyk7XG4gICAgLy8gY29uc29sZS5sb2coaW5zdHJ1bWVudGFsKTtcbn0pIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJGZXRjaEluc3RydW1lbnRhbCIsInJlcXVpcmUiLCJGZXRjaFZvY2FsIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5zdHJ1bWVudGFsIiwicXVlcnlTZWxlY3RvciIsInBsYXlpbmciLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fetch_instrumental.js":
/*!*******************************************!*\
  !*** ./src/scripts/fetch_instrumental.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _frequency__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./frequency */ \"./src/scripts/frequency.js\");\n// import PlaybackButton from \"./play_button\";\n\nclass FetchInstrumental {\n  constructor(select, play) {\n    this.select = select;\n    this.play = play;\n    this.audio;\n    this.select.addEventListener(\"change\", this.setSong.bind(this));\n    this.play.addEventListener(\"click\", this.playFunc.bind(this));\n  }\n  playFunc() {\n    let state = this.play.getAttribute(\"data-playing\");\n    if (state === \"paused\") {\n      this.play.setAttribute(\"data-playing\", \"playing\");\n      this.audio.play();\n    } else {\n      this.play.setAttribute(\"data-playing\", \"paused\");\n      this.audio.pause();\n    }\n  }\n  setSong(ele) {\n    //selecting play/pause on 'select isntrumental' will make it be paused so that when you select a song it begins in the paused state\n\n    if (this.audio) {\n      this.audio.pause();\n      this.play.setAttribute(\"data-playing\", \"paused\");\n    }\n    let song = ele.target.value;\n    let audio = new Audio(`instrumentals/${song}.mp3`);\n    let context = new AudioContext();\n    this.audioBufferCreate(context, song);\n    const source = context.createMediaElementSource(audio);\n    source.connect(context.destination);\n    this.audio = audio;\n  }\n  audioBufferCreate(context, song) {\n    let bpmBox = document.getElementById(\"instrumentalBPM\");\n    new _frequency__WEBPACK_IMPORTED_MODULE_0__[\"default\"](context, bpmBox, song);\n  }\n  // this.ele.children[0].innerText = \"Ouch!\";\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FetchInstrumental);\n\n\n// class AudioFetch {\n\n//     constructor(ele){\n//         this.ele = ele;\n//         this.ele.innerHTML = \"<h2>click to fetch and play</h2>\"\n//         this.ele.addEventListener(\"click\", this.fetchNPlay.bind(this));\n//     }\n\n//     fetchNPlay(){\n//         // const AudioContext = window.AudioContext || window.webkitAudioContext;\n//         const ctx = new AudioContext();\n\n//         let audio;\n\n//         fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3')\n//             .then(data => data.arrayBuffer())\n//             .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))\n//             .then(decodedAudio => {\n//                 audio = decodedAudio;\n//             });\n//             console.log(audio);\n//         //^^fetch aduio file, put into buffer, decode it tobe able\n//         //towork with it as anaudio node\n//         const playSound = ctx.createBufferSource();\n//         playSound.buffer = audio;\n//         playSound.connect(ctx.destination);\n//         playSound.start(ctx.currentTime);\n\n//         console.log(ctx);\n\n//         this.ele.innerHTML = \"<h2>playing...</h2>\"\n//     }\n// }\n\n// let audio;\n\n// fetch(`instrumentals/${song}.mp3`)\n//     .then(audioData => audioData.arrayBuffer())\n//     .then(buffered => context.decodeAudioData(buffered))\n//     .then(buffered => audio = buffered)\n\n//     console.log(audio);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaF9pbnN0cnVtZW50YWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQSxpQkFBaUIsQ0FBQztFQUNwQkMsV0FBVyxDQUFDQyxNQUFNLEVBQUVDLElBQUksRUFBQztJQUNyQixJQUFJLENBQUNELE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLEtBQUs7SUFDVixJQUFJLENBQUNGLE1BQU0sQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0QsSUFBSSxDQUFDSixJQUFJLENBQUNFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNHLFFBQVEsQ0FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ2pFO0VBRUFDLFFBQVEsR0FBRTtJQUVOLElBQUlDLEtBQUssR0FBRyxJQUFJLENBQUNOLElBQUksQ0FBQ08sWUFBWSxDQUFDLGNBQWMsQ0FBQztJQUVsRCxJQUFJRCxLQUFLLEtBQUssUUFBUSxFQUFDO01BQ25CLElBQUksQ0FBQ04sSUFBSSxDQUFDUSxZQUFZLENBQUMsY0FBYyxFQUFFLFNBQVMsQ0FBQztNQUNqRCxJQUFJLENBQUNQLEtBQUssQ0FBQ0QsSUFBSSxFQUFFO0lBQ3JCLENBQUMsTUFBSztNQUNGLElBQUksQ0FBQ0EsSUFBSSxDQUFDUSxZQUFZLENBQUMsY0FBYyxFQUFFLFFBQVEsQ0FBQztNQUNoRCxJQUFJLENBQUNQLEtBQUssQ0FBQ1EsS0FBSyxFQUFFO0lBQ3RCO0VBRUo7RUFFQU4sT0FBTyxDQUFDTyxHQUFHLEVBQUM7SUFFUjs7SUFFQSxJQUFJLElBQUksQ0FBQ1QsS0FBSyxFQUFDO01BQ1gsSUFBSSxDQUFDQSxLQUFLLENBQUNRLEtBQUssRUFBRTtNQUNsQixJQUFJLENBQUNULElBQUksQ0FBQ1EsWUFBWSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7SUFDcEQ7SUFFQSxJQUFJRyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO0lBRTNCLElBQUlaLEtBQUssR0FBRyxJQUFJYSxLQUFLLENBQUUsaUJBQWdCSCxJQUFLLE1BQUssQ0FBQztJQUVsRCxJQUFJSSxPQUFPLEdBQUcsSUFBSUMsWUFBWSxFQUFFO0lBRWhDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNGLE9BQU8sRUFBRUosSUFBSSxDQUFDO0lBRXJDLE1BQU1PLE1BQU0sR0FBR0gsT0FBTyxDQUFDSSx3QkFBd0IsQ0FBQ2xCLEtBQUssQ0FBQztJQUN0RGlCLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDTCxPQUFPLENBQUNNLFdBQVcsQ0FBQztJQUVuQyxJQUFJLENBQUNwQixLQUFLLEdBQUdBLEtBQUs7RUFFbEI7RUFFSmdCLGlCQUFpQixDQUFDRixPQUFPLEVBQUVKLElBQUksRUFBQztJQUM1QixJQUFJVyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGlCQUFpQixDQUFDO0lBQ3ZELElBQUlDLGtEQUFTLENBQUNWLE9BQU8sRUFBRU8sTUFBTSxFQUFFWCxJQUFJLENBQUM7RUFDeEM7RUFDQTtBQUNKOztBQUVBLCtEQUFlZCxpQkFBaUIsRUFBQztBQUNHOztBQUdwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRVE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL3NjcmlwdHMvZmV0Y2hfaW5zdHJ1bWVudGFsLmpzP2Y1NjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFBsYXliYWNrQnV0dG9uIGZyb20gXCIuL3BsYXlfYnV0dG9uXCI7XG5cbmNsYXNzIEZldGNoSW5zdHJ1bWVudGFsIHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3QsIHBsYXkpe1xuICAgICAgICB0aGlzLnNlbGVjdCA9IHNlbGVjdDtcbiAgICAgICAgdGhpcy5wbGF5ID0gcGxheTtcbiAgICAgICAgdGhpcy5hdWRpbztcbiAgICAgICAgdGhpcy5zZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCB0aGlzLnNldFNvbmcuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5wbGF5RnVuYy5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBwbGF5RnVuYygpe1xuXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMucGxheS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYXlpbmdcIik7XG5cbiAgICAgICAgaWYgKHN0YXRlID09PSBcInBhdXNlZFwiKXtcbiAgICAgICAgICAgIHRoaXMucGxheS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYXlpbmdcIiwgXCJwbGF5aW5nXCIpXG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKVxuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aGlzLnBsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGF5aW5nXCIsIFwicGF1c2VkXCIpO1xuICAgICAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXRTb25nKGVsZSl7XG5cbiAgICAgICAgLy9zZWxlY3RpbmcgcGxheS9wYXVzZSBvbiAnc2VsZWN0IGlzbnRydW1lbnRhbCcgd2lsbCBtYWtlIGl0IGJlIHBhdXNlZCBzbyB0aGF0IHdoZW4geW91IHNlbGVjdCBhIHNvbmcgaXQgYmVnaW5zIGluIHRoZSBwYXVzZWQgc3RhdGVcblxuICAgICAgICBpZiAodGhpcy5hdWRpbyl7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGF5aW5nXCIsIFwicGF1c2VkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNvbmcgPSBlbGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhgaW5zdHJ1bWVudGFscy8ke3Nvbmd9Lm1wM2ApO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy5hdWRpb0J1ZmZlckNyZWF0ZShjb250ZXh0LCBzb25nKTtcblxuICAgICAgICBjb25zdCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpbyk7XG4gICAgICAgIHNvdXJjZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuXG4gICAgICAgIHRoaXMuYXVkaW8gPSBhdWRpbztcblxuICAgICAgICB9XG4gICAgXG4gICAgYXVkaW9CdWZmZXJDcmVhdGUoY29udGV4dCwgc29uZyl7XG4gICAgICAgIGxldCBicG1Cb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluc3RydW1lbnRhbEJQTVwiKTtcbiAgICAgICAgbmV3IEZyZXF1ZW5jeShjb250ZXh0LCBicG1Cb3gsIHNvbmcpO1xuICAgIH1cbiAgICAvLyB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2ghXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZldGNoSW5zdHJ1bWVudGFsO1xuaW1wb3J0IEZyZXF1ZW5jeSBmcm9tIFwiLi9mcmVxdWVuY3lcIjtcblxuXG4vLyBjbGFzcyBBdWRpb0ZldGNoIHtcblxuLy8gICAgIGNvbnN0cnVjdG9yKGVsZSl7XG4vLyAgICAgICAgIHRoaXMuZWxlID0gZWxlO1xuLy8gICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMj5jbGljayB0byBmZXRjaCBhbmQgcGxheTwvaDI+XCJcbi8vICAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuZmV0Y2hOUGxheS5iaW5kKHRoaXMpKTtcbi8vICAgICB9XG5cbi8vICAgICBmZXRjaE5QbGF5KCl7XG4vLyAgICAgICAgIC8vIGNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcbi8vICAgICAgICAgY29uc3QgY3R4ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4vLyAgICAgICAgIGxldCBhdWRpbztcblxuLy8gICAgICAgICBmZXRjaCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTIzOTQxL1lvZGVsX1NvdW5kX0VmZmVjdC5tcDMnKVxuLy8gICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhLmFycmF5QnVmZmVyKCkpXG4vLyAgICAgICAgICAgICAudGhlbihhcnJheUJ1ZmZlciA9PiBjdHguZGVjb2RlQXVkaW9EYXRhKGFycmF5QnVmZmVyKSlcbi8vICAgICAgICAgICAgIC50aGVuKGRlY29kZWRBdWRpbyA9PiB7XG4vLyAgICAgICAgICAgICAgICAgYXVkaW8gPSBkZWNvZGVkQXVkaW87XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvKTtcbi8vICAgICAgICAgLy9eXmZldGNoIGFkdWlvIGZpbGUsIHB1dCBpbnRvIGJ1ZmZlciwgZGVjb2RlIGl0IHRvYmUgYWJsZVxuLy8gICAgICAgICAvL3Rvd29yayB3aXRoIGl0IGFzIGFuYXVkaW8gbm9kZVxuLy8gICAgICAgICBjb25zdCBwbGF5U291bmQgPSBjdHguY3JlYXRlQnVmZmVyU291cmNlKCk7XG4vLyAgICAgICAgIHBsYXlTb3VuZC5idWZmZXIgPSBhdWRpbztcbi8vICAgICAgICAgcGxheVNvdW5kLmNvbm5lY3QoY3R4LmRlc3RpbmF0aW9uKTtcbi8vICAgICAgICAgcGxheVNvdW5kLnN0YXJ0KGN0eC5jdXJyZW50VGltZSk7XG5cbi8vICAgICAgICAgY29uc29sZS5sb2coY3R4KTtcblxuLy8gICAgICAgICB0aGlzLmVsZS5pbm5lckhUTUwgPSBcIjxoMj5wbGF5aW5nLi4uPC9oMj5cIlxuLy8gICAgIH1cbi8vIH1cblxuICAgICAgICAvLyBsZXQgYXVkaW87XG5cbiAgICAgICAgLy8gZmV0Y2goYGluc3RydW1lbnRhbHMvJHtzb25nfS5tcDNgKVxuICAgICAgICAvLyAgICAgLnRoZW4oYXVkaW9EYXRhID0+IGF1ZGlvRGF0YS5hcnJheUJ1ZmZlcigpKVxuICAgICAgICAvLyAgICAgLnRoZW4oYnVmZmVyZWQgPT4gY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYnVmZmVyZWQpKVxuICAgICAgICAvLyAgICAgLnRoZW4oYnVmZmVyZWQgPT4gYXVkaW8gPSBidWZmZXJlZClcblxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coYXVkaW8pOyJdLCJuYW1lcyI6WyJGZXRjaEluc3RydW1lbnRhbCIsImNvbnN0cnVjdG9yIiwic2VsZWN0IiwicGxheSIsImF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFNvbmciLCJiaW5kIiwicGxheUZ1bmMiLCJzdGF0ZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInBhdXNlIiwiZWxlIiwic29uZyIsInRhcmdldCIsInZhbHVlIiwiQXVkaW8iLCJjb250ZXh0IiwiQXVkaW9Db250ZXh0IiwiYXVkaW9CdWZmZXJDcmVhdGUiLCJzb3VyY2UiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJicG1Cb3giLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRnJlcXVlbmN5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/fetch_instrumental.js\n");

/***/ }),

/***/ "./src/scripts/fetch_vocal.js":
/*!************************************!*\
  !*** ./src/scripts/fetch_vocal.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FetchVocal {\n  constructor(select, play) {\n    this.select = select;\n    this.play = play;\n    this.audio;\n    this.select.addEventListener(\"change\", this.setSong.bind(this));\n    this.play.addEventListener(\"click\", this.playFunc.bind(this));\n  }\n  playFunc() {\n    let state = this.play.getAttribute(\"data-playing\");\n    if (state === \"paused\") {\n      this.play.setAttribute(\"data-playing\", \"playing\");\n      this.audio.play();\n    } else {\n      this.play.setAttribute(\"data-playing\", \"paused\");\n      this.audio.pause();\n    }\n  }\n  setSong(ele) {\n    //selecting play/pause on 'select isntrumental' will make it be paused so that when you select a song it begins in the paused state\n\n    if (this.audio) {\n      this.audio.pause();\n      this.play.setAttribute(\"data-playing\", \"paused\");\n    }\n    let song = ele.target.value;\n    let audio = new Audio(`vocals/${song}.mp3`);\n    let context = new AudioContext();\n    const source = context.createMediaElementSource(audio);\n    source.connect(context.destination);\n    this.audio = audio;\n  }\n\n  // this.ele.children[0].innerText = \"Ouch!\";\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FetchVocal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaF92b2NhbC5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsVUFBVSxDQUFDO0VBQ2JDLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFQyxJQUFJLEVBQUM7SUFDckIsSUFBSSxDQUFDRCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxLQUFLO0lBQ1YsSUFBSSxDQUFDRixNQUFNLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELElBQUksQ0FBQ0osSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRyxRQUFRLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNqRTtFQUVBQyxRQUFRLEdBQUU7SUFFTixJQUFJQyxLQUFLLEdBQUcsSUFBSSxDQUFDTixJQUFJLENBQUNPLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFFbEQsSUFBSUQsS0FBSyxLQUFLLFFBQVEsRUFBQztNQUNuQixJQUFJLENBQUNOLElBQUksQ0FBQ1EsWUFBWSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7TUFDakQsSUFBSSxDQUFDUCxLQUFLLENBQUNELElBQUksRUFBRTtJQUNyQixDQUFDLE1BQUs7TUFDRixJQUFJLENBQUNBLElBQUksQ0FBQ1EsWUFBWSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7TUFDaEQsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssRUFBRTtJQUN0QjtFQUVKO0VBRUFOLE9BQU8sQ0FBQ08sR0FBRyxFQUFDO0lBRVI7O0lBRUEsSUFBSSxJQUFJLENBQUNULEtBQUssRUFBQztNQUNYLElBQUksQ0FBQ0EsS0FBSyxDQUFDUSxLQUFLLEVBQUU7TUFDbEIsSUFBSSxDQUFDVCxJQUFJLENBQUNRLFlBQVksQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDO0lBQ3BEO0lBRUEsSUFBSUcsSUFBSSxHQUFHRCxHQUFHLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztJQUUzQixJQUFJWixLQUFLLEdBQUcsSUFBSWEsS0FBSyxDQUFFLFVBQVNILElBQUssTUFBSyxDQUFDO0lBRTNDLElBQUlJLE9BQU8sR0FBRyxJQUFJQyxZQUFZLEVBQUU7SUFFaEMsTUFBTUMsTUFBTSxHQUFHRixPQUFPLENBQUNHLHdCQUF3QixDQUFDakIsS0FBSyxDQUFDO0lBQ3REZ0IsTUFBTSxDQUFDRSxPQUFPLENBQUNKLE9BQU8sQ0FBQ0ssV0FBVyxDQUFDO0lBRW5DLElBQUksQ0FBQ25CLEtBQUssR0FBR0EsS0FBSztFQUNsQjs7RUFFSjtBQUNKOztBQUVBLCtEQUFlSixVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC8uL3NyYy9zY3JpcHRzL2ZldGNoX3ZvY2FsLmpzPzVlOTkiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmV0Y2hWb2NhbCB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0LCBwbGF5KXtcbiAgICAgICAgdGhpcy5zZWxlY3QgPSBzZWxlY3Q7XG4gICAgICAgIHRoaXMucGxheSA9IHBsYXk7XG4gICAgICAgIHRoaXMuYXVkaW87XG4gICAgICAgIHRoaXMuc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5zZXRTb25nLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnBsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMucGxheUZ1bmMuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgcGxheUZ1bmMoKXtcblxuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLnBsYXkuZ2V0QXR0cmlidXRlKFwiZGF0YS1wbGF5aW5nXCIpO1xuXG4gICAgICAgIGlmIChzdGF0ZSA9PT0gXCJwYXVzZWRcIil7XG4gICAgICAgICAgICB0aGlzLnBsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGF5aW5nXCIsIFwicGxheWluZ1wiKVxuICAgICAgICAgICAgdGhpcy5hdWRpby5wbGF5KClcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy5wbGF5LnNldEF0dHJpYnV0ZShcImRhdGEtcGxheWluZ1wiLCBcInBhdXNlZFwiKTtcbiAgICAgICAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgc2V0U29uZyhlbGUpe1xuXG4gICAgICAgIC8vc2VsZWN0aW5nIHBsYXkvcGF1c2Ugb24gJ3NlbGVjdCBpc250cnVtZW50YWwnIHdpbGwgbWFrZSBpdCBiZSBwYXVzZWQgc28gdGhhdCB3aGVuIHlvdSBzZWxlY3QgYSBzb25nIGl0IGJlZ2lucyBpbiB0aGUgcGF1c2VkIHN0YXRlXG5cbiAgICAgICAgaWYgKHRoaXMuYXVkaW8pe1xuICAgICAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5LnNldEF0dHJpYnV0ZShcImRhdGEtcGxheWluZ1wiLCBcInBhdXNlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzb25nID0gZWxlLnRhcmdldC52YWx1ZTtcblxuICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oYHZvY2Fscy8ke3Nvbmd9Lm1wM2ApO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgICAgICBzb3VyY2UuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICB0aGlzLmF1ZGlvID0gYXVkaW87XG4gICAgICAgIH1cbiAgICBcbiAgICAvLyB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2ghXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZldGNoVm9jYWw7Il0sIm5hbWVzIjpbIkZldGNoVm9jYWwiLCJjb25zdHJ1Y3RvciIsInNlbGVjdCIsInBsYXkiLCJhdWRpbyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzZXRTb25nIiwiYmluZCIsInBsYXlGdW5jIiwic3RhdGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJwYXVzZSIsImVsZSIsInNvbmciLCJ0YXJnZXQiLCJ2YWx1ZSIsIkF1ZGlvIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsInNvdXJjZSIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/fetch_vocal.js\n");

/***/ }),

/***/ "./src/scripts/frequency.js":
/*!**********************************!*\
  !*** ./src/scripts/frequency.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Frequency {\n  constructor(context, bpmBox, song) {\n    this.context = context;\n    this.bpmBox = bpmBox;\n    this.song = song;\n    //set interval or timeout thing for typing in the box, with play/pause as the disruptor. \n    // this.fillBox(this.context, this.bpmBox);\n    this.fetchSong(context, song);\n    // this.createAudioBufferSourceNode(this.context);\n  }\n\n  // fillBox(context, bpmBox){\n\n  // }\n\n  fetchSong(context, song) {\n    let audio;\n\n    // debugger\n\n    // debugger\n\n    const load = () => {\n      const request = new XMLHttpRequest();\n      request.open(\"GET\", \"instrumentals/tgif.mp3\");\n      request.responseType = \"arraybuffer\";\n      request.onload = function () {\n        let undecodedAudio = request.response;\n        context.decodeAudioData(undecodedAudio, data => audio = data);\n      };\n      request.send();\n      console.log(audio);\n    };\n    const play = () => {\n      const source = context.createBufferSource();\n      source.audio = audio;\n      source.connect(context.destination);\n      source.start();\n    };\n    load();\n    play();\n  }\n\n  //     createAudioBufferSourceNode(context, audio){\n  //         let source = context.createBufferSource();\n  //         audio = new ArrayBuffer(audio);\n\n  //         context.decodeAudioData(audio, (buffer) => {\n  //             buffered = buffer;\n  //             source.buffer = buffered;\n  //             source.playbackRate.value = 200;\n  //             source.connect(context.destination);\n  //         })\n\n  //         console.log(source);\n  //     }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Frequency);\n\n// fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3')\n//             .then(data => data.arrayBuffer())\n//             .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))\n//             .then(decodedAudio => {\n//                 audio = decodedAudio;\n//             });\n\n// let audio;\n\n// fetch(`instrumentals/${song}.mp3`)\n//     .then(audioData => audioData.arrayBuffer())\n//     .then(buffered => context.decodeAudioData(buffered))\n//     .then(buffered => audio = buffered)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mcmVxdWVuY3kuanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFNBQVM7RUFFWEMsV0FBVyxDQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFDO0lBQzlCLElBQUksQ0FBQ0YsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCO0lBQ0E7SUFDQSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0gsT0FBTyxFQUFFRSxJQUFJLENBQUM7SUFDN0I7RUFDSjs7RUFFQTs7RUFFQTs7RUFFQUMsU0FBUyxDQUFDSCxPQUFPLEVBQUVFLElBQUksRUFBQztJQUVwQixJQUFJRSxLQUFLOztJQUVUOztJQUVBOztJQUVBLE1BQU1DLElBQUksR0FBRyxNQUFNO01BQ2YsTUFBTUMsT0FBTyxHQUFHLElBQUlDLGNBQWMsRUFBRTtNQUNwQ0QsT0FBTyxDQUFDRSxJQUFJLENBQUMsS0FBSyxFQUFFLHdCQUF3QixDQUFDO01BQzdDRixPQUFPLENBQUNHLFlBQVksR0FBRyxhQUFhO01BQ3BDSCxPQUFPLENBQUNJLE1BQU0sR0FBRyxZQUFXO1FBQzFCLElBQUlDLGNBQWMsR0FBR0wsT0FBTyxDQUFDTSxRQUFRO1FBQ3JDWixPQUFPLENBQUNhLGVBQWUsQ0FBQ0YsY0FBYyxFQUFHRyxJQUFJLElBQUtWLEtBQUssR0FBR1UsSUFBSSxDQUFDO01BQ2pFLENBQUM7TUFDRFIsT0FBTyxDQUFDUyxJQUFJLEVBQUU7TUFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNiLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUgsTUFBTWMsSUFBSSxHQUFHLE1BQU07TUFDZixNQUFNQyxNQUFNLEdBQUduQixPQUFPLENBQUNvQixrQkFBa0IsRUFBRTtNQUMzQ0QsTUFBTSxDQUFDZixLQUFLLEdBQUdBLEtBQUs7TUFDcEJlLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDckIsT0FBTyxDQUFDc0IsV0FBVyxDQUFDO01BQ25DSCxNQUFNLENBQUNJLEtBQUssRUFBRTtJQUNoQixDQUFDO0lBRUhsQixJQUFJLEVBQUU7SUFDTmEsSUFBSSxFQUFFO0VBRVY7O0VBRUo7RUFDQTtFQUNBOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBO0FBRUE7O0FBRUEsK0RBQWVwQixTQUFTLEVBQUM7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFUTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQvLi9zcmMvc2NyaXB0cy9mcmVxdWVuY3kuanM/MDY5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGcmVxdWVuY3l7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBicG1Cb3gsIHNvbmcpe1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmJwbUJveCA9IGJwbUJveDtcbiAgICAgICAgdGhpcy5zb25nID0gc29uZztcbiAgICAgICAgLy9zZXQgaW50ZXJ2YWwgb3IgdGltZW91dCB0aGluZyBmb3IgdHlwaW5nIGluIHRoZSBib3gsIHdpdGggcGxheS9wYXVzZSBhcyB0aGUgZGlzcnVwdG9yLiBcbiAgICAgICAgLy8gdGhpcy5maWxsQm94KHRoaXMuY29udGV4dCwgdGhpcy5icG1Cb3gpO1xuICAgICAgICB0aGlzLmZldGNoU29uZyhjb250ZXh0LCBzb25nKTtcbiAgICAgICAgLy8gdGhpcy5jcmVhdGVBdWRpb0J1ZmZlclNvdXJjZU5vZGUodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICAvLyBmaWxsQm94KGNvbnRleHQsIGJwbUJveCl7XG4gICAgICAgIFxuICAgIC8vIH1cblxuICAgIGZldGNoU29uZyhjb250ZXh0LCBzb25nKXtcblxuICAgICAgICBsZXQgYXVkaW87XG5cbiAgICAgICAgLy8gZGVidWdnZXJcblxuICAgICAgICAvLyBkZWJ1Z2dlclxuXG4gICAgICAgIGNvbnN0IGxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9wZW4oXCJHRVRcIiwgXCJpbnN0cnVtZW50YWxzL3RnaWYubXAzXCIpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgICAgICAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICBsZXQgdW5kZWNvZGVkQXVkaW8gPSByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgICAgICAgICBjb250ZXh0LmRlY29kZUF1ZGlvRGF0YSh1bmRlY29kZWRBdWRpbywgKGRhdGEpID0+IGF1ZGlvID0gZGF0YSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhdWRpbyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBsYXkgPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgICAgICAgICAgc291cmNlLmF1ZGlvID0gYXVkaW87XG4gICAgICAgICAgICBzb3VyY2UuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgIHNvdXJjZS5zdGFydCgpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgbG9hZCgpO1xuICAgICAgICBwbGF5KCk7XG4gICAgICAgIFxuICAgIH1cblxuLy8gICAgIGNyZWF0ZUF1ZGlvQnVmZmVyU291cmNlTm9kZShjb250ZXh0LCBhdWRpbyl7XG4vLyAgICAgICAgIGxldCBzb3VyY2UgPSBjb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuLy8gICAgICAgICBhdWRpbyA9IG5ldyBBcnJheUJ1ZmZlcihhdWRpbyk7XG5cbi8vICAgICAgICAgY29udGV4dC5kZWNvZGVBdWRpb0RhdGEoYXVkaW8sIChidWZmZXIpID0+IHtcbi8vICAgICAgICAgICAgIGJ1ZmZlcmVkID0gYnVmZmVyO1xuLy8gICAgICAgICAgICAgc291cmNlLmJ1ZmZlciA9IGJ1ZmZlcmVkO1xuLy8gICAgICAgICAgICAgc291cmNlLnBsYXliYWNrUmF0ZS52YWx1ZSA9IDIwMDtcbi8vICAgICAgICAgICAgIHNvdXJjZS5jb25uZWN0KGNvbnRleHQuZGVzdGluYXRpb24pO1xuLy8gICAgICAgICB9KVxuICAgICAgICBcbi8vICAgICAgICAgY29uc29sZS5sb2coc291cmNlKTtcbi8vICAgICB9XG4gICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZyZXF1ZW5jeTtcblxuLy8gZmV0Y2goJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzEyMzk0MS9Zb2RlbF9Tb3VuZF9FZmZlY3QubXAzJylcbi8vICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5hcnJheUJ1ZmZlcigpKVxuLy8gICAgICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4gY3R4LmRlY29kZUF1ZGlvRGF0YShhcnJheUJ1ZmZlcikpXG4vLyAgICAgICAgICAgICAudGhlbihkZWNvZGVkQXVkaW8gPT4ge1xuLy8gICAgICAgICAgICAgICAgIGF1ZGlvID0gZGVjb2RlZEF1ZGlvO1xuLy8gICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gbGV0IGF1ZGlvO1xuXG4gICAgICAgIC8vIGZldGNoKGBpbnN0cnVtZW50YWxzLyR7c29uZ30ubXAzYClcbiAgICAgICAgLy8gICAgIC50aGVuKGF1ZGlvRGF0YSA9PiBhdWRpb0RhdGEuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgLy8gICAgIC50aGVuKGJ1ZmZlcmVkID0+IGNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlcmVkKSlcbiAgICAgICAgLy8gICAgIC50aGVuKGJ1ZmZlcmVkID0+IGF1ZGlvID0gYnVmZmVyZWQpIl0sIm5hbWVzIjpbIkZyZXF1ZW5jeSIsImNvbnN0cnVjdG9yIiwiY29udGV4dCIsImJwbUJveCIsInNvbmciLCJmZXRjaFNvbmciLCJhdWRpbyIsImxvYWQiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwib25sb2FkIiwidW5kZWNvZGVkQXVkaW8iLCJyZXNwb25zZSIsImRlY29kZUF1ZGlvRGF0YSIsImRhdGEiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsInBsYXkiLCJzb3VyY2UiLCJjcmVhdGVCdWZmZXJTb3VyY2UiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/frequency.js\n");

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