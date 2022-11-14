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

eval("// const { default: PlaybackButton } = require(\"./scripts/play_button.js\");\nconst {\n  default: FetchAudio\n} = __webpack_require__(/*! ./scripts/fetch_audio.js */ \"./src/scripts/fetch_audio.js\");\n\n// document.addEventListener(\"DOMContentLoaded\", ()=>{\n//     const playing = document.getElementById(\"play/pause\");\n//     new PlaybackButton(playing);\n// })\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const instrumental = document.querySelector(\".instrumentals\");\n  const playing = document.getElementById(\"play/pause\");\n  new FetchAudio(instrumental, playing);\n  // console.log(instrumental);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNO0VBQUVBLE9BQU8sRUFBRUM7QUFBVyxDQUFDLEdBQUdDLG1CQUFPLENBQUMsOERBQTBCLENBQUM7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQUk7RUFDOUMsTUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3RCxNQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ssY0FBYyxDQUFDLFlBQVksQ0FBQztFQUNyRCxJQUFJUCxVQUFVLENBQUNJLFlBQVksRUFBRUUsT0FBTyxDQUFDO0VBQ3JDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgZGVmYXVsdDogUGxheWJhY2tCdXR0b24gfSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvcGxheV9idXR0b24uanNcIik7XG5jb25zdCB7IGRlZmF1bHQ6IEZldGNoQXVkaW8gfSA9IHJlcXVpcmUoXCIuL3NjcmlwdHMvZmV0Y2hfYXVkaW8uanNcIik7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG4vLyAgICAgY29uc3QgcGxheWluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheS9wYXVzZVwiKTtcbi8vICAgICBuZXcgUGxheWJhY2tCdXR0b24ocGxheWluZyk7XG4vLyB9KVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgIGNvbnN0IGluc3RydW1lbnRhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5zdHJ1bWVudGFsc1wiKTtcbiAgICBjb25zdCBwbGF5aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5L3BhdXNlXCIpO1xuICAgIG5ldyBGZXRjaEF1ZGlvKGluc3RydW1lbnRhbCwgcGxheWluZyk7XG4gICAgLy8gY29uc29sZS5sb2coaW5zdHJ1bWVudGFsKTtcbn0pIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJGZXRjaEF1ZGlvIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImluc3RydW1lbnRhbCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5aW5nIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fetch_audio.js":
/*!************************************!*\
  !*** ./src/scripts/fetch_audio.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import PlaybackButton from \"./play_button\";\n\nclass FetchAudio {\n  constructor(select, play) {\n    this.select = select;\n    this.play = play;\n    this.audio;\n    this.select.addEventListener(\"change\", this.setSong.bind(this));\n    this.play.addEventListener(\"click\", this.playFunc.bind(this));\n  }\n  playFunc() {\n    let state = this.play.getAttribute(\"data-playing\");\n    if (state === \"paused\") {\n      this.play.setAttribute(\"data-playing\", \"playing\");\n      this.audio.play();\n    } else {\n      this.play.setAttribute(\"data-playing\", \"paused\");\n      this.audio.pause();\n    }\n  }\n  setSong(ele) {\n    if (this.audio) {\n      this.audio.pause();\n      this.play.setAttribute(\"data-playing\", \"paused\");\n    }\n    let song = ele.target.value;\n    let audio = new Audio(`instrumentals/${song}.mp3`);\n    let context = new AudioContext();\n    const source = context.createMediaElementSource(audio);\n    source.connect(context.destination);\n    this.audio = audio;\n  }\n\n  // this.ele.children[0].innerText = \"Ouch!\";\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FetchAudio);\n\n// class AudioFetch {\n\n//     constructor(ele){\n//         this.ele = ele;\n//         this.ele.innerHTML = \"<h2>click to fetch and play</h2>\"\n//         this.ele.addEventListener(\"click\", this.fetchNPlay.bind(this));\n//     }\n\n//     fetchNPlay(){\n//         // const AudioContext = window.AudioContext || window.webkitAudioContext;\n//         const ctx = new AudioContext();\n\n//         let audio;\n\n//         fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3')\n//             .then(data => data.arrayBuffer())\n//             .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))\n//             .then(decodedAudio => {\n//                 audio = decodedAudio;\n//             });\n//             console.log(audio);\n//         //^^fetch aduio file, put into buffer, decode it tobe able\n//         //towork with it as anaudio node\n//         const playSound = ctx.createBufferSource();\n//         playSound.buffer = audio;\n//         playSound.connect(ctx.destination);\n//         playSound.start(ctx.currentTime);\n\n//         console.log(ctx);\n\n//         this.ele.innerHTML = \"<h2>playing...</h2>\"\n//     }\n// }\n\n// let audio;\n\n// fetch(`instrumentals/${song}.mp3`)\n//     .then(audioData => audioData.arrayBuffer())\n//     .then(buffered => context.decodeAudioData(buffered))\n//     .then(buffered => audio = buffered)\n\n//     console.log(audio);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaF9hdWRpby5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7O0FBRUEsTUFBTUEsVUFBVSxDQUFDO0VBQ2JDLFdBQVcsQ0FBQ0MsTUFBTSxFQUFFQyxJQUFJLEVBQUM7SUFDckIsSUFBSSxDQUFDRCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxLQUFLO0lBQ1YsSUFBSSxDQUFDRixNQUFNLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELElBQUksQ0FBQ0osSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDRyxRQUFRLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNqRTtFQUVBQyxRQUFRLEdBQUU7SUFFTixJQUFJQyxLQUFLLEdBQUcsSUFBSSxDQUFDTixJQUFJLENBQUNPLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFFbEQsSUFBSUQsS0FBSyxLQUFLLFFBQVEsRUFBQztNQUNuQixJQUFJLENBQUNOLElBQUksQ0FBQ1EsWUFBWSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUM7TUFDakQsSUFBSSxDQUFDUCxLQUFLLENBQUNELElBQUksRUFBRTtJQUNyQixDQUFDLE1BQUs7TUFDRixJQUFJLENBQUNBLElBQUksQ0FBQ1EsWUFBWSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7TUFDaEQsSUFBSSxDQUFDUCxLQUFLLENBQUNRLEtBQUssRUFBRTtJQUN0QjtFQUVKO0VBRUFOLE9BQU8sQ0FBQ08sR0FBRyxFQUFDO0lBRVIsSUFBSSxJQUFJLENBQUNULEtBQUssRUFBQztNQUNYLElBQUksQ0FBQ0EsS0FBSyxDQUFDUSxLQUFLLEVBQUU7TUFDbEIsSUFBSSxDQUFDVCxJQUFJLENBQUNRLFlBQVksQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDO0lBQ3BEO0lBRUEsSUFBSUcsSUFBSSxHQUFHRCxHQUFHLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSztJQUUzQixJQUFJWixLQUFLLEdBQUcsSUFBSWEsS0FBSyxDQUFFLGlCQUFnQkgsSUFBSyxNQUFLLENBQUM7SUFFbEQsSUFBSUksT0FBTyxHQUFHLElBQUlDLFlBQVksRUFBRTtJQUVoQyxNQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0csd0JBQXdCLENBQUNqQixLQUFLLENBQUM7SUFDdERnQixNQUFNLENBQUNFLE9BQU8sQ0FBQ0osT0FBTyxDQUFDSyxXQUFXLENBQUM7SUFFbkMsSUFBSSxDQUFDbkIsS0FBSyxHQUFHQSxLQUFLO0VBQ2xCOztFQUVKO0FBQ0o7O0FBRUEsK0RBQWVKLFVBQVUsRUFBQzs7QUFHMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVROztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC8uL3NyYy9zY3JpcHRzL2ZldGNoX2F1ZGlvLmpzP2JmOWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFBsYXliYWNrQnV0dG9uIGZyb20gXCIuL3BsYXlfYnV0dG9uXCI7XG5cbmNsYXNzIEZldGNoQXVkaW8ge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdCwgcGxheSl7XG4gICAgICAgIHRoaXMuc2VsZWN0ID0gc2VsZWN0O1xuICAgICAgICB0aGlzLnBsYXkgPSBwbGF5O1xuICAgICAgICB0aGlzLmF1ZGlvO1xuICAgICAgICB0aGlzLnNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMuc2V0U29uZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wbGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnBsYXlGdW5jLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHBsYXlGdW5jKCl7XG5cbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5wbGF5LmdldEF0dHJpYnV0ZShcImRhdGEtcGxheWluZ1wiKTtcblxuICAgICAgICBpZiAoc3RhdGUgPT09IFwicGF1c2VkXCIpe1xuICAgICAgICAgICAgdGhpcy5wbGF5LnNldEF0dHJpYnV0ZShcImRhdGEtcGxheWluZ1wiLCBcInBsYXlpbmdcIilcbiAgICAgICAgICAgIHRoaXMuYXVkaW8ucGxheSgpXG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRoaXMucGxheS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYXlpbmdcIiwgXCJwYXVzZWRcIik7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldFNvbmcoZWxlKXtcblxuICAgICAgICBpZiAodGhpcy5hdWRpbyl7XG4gICAgICAgICAgICB0aGlzLmF1ZGlvLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLnBsYXkuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGF5aW5nXCIsIFwicGF1c2VkXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNvbmcgPSBlbGUudGFyZ2V0LnZhbHVlO1xuXG4gICAgICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbyhgaW5zdHJ1bWVudGFscy8ke3Nvbmd9Lm1wM2ApO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgICAgICBzb3VyY2UuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICB0aGlzLmF1ZGlvID0gYXVkaW87XG4gICAgICAgIH1cbiAgICBcbiAgICAvLyB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2ghXCI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZldGNoQXVkaW87XG5cblxuLy8gY2xhc3MgQXVkaW9GZXRjaCB7XG5cbi8vICAgICBjb25zdHJ1Y3RvcihlbGUpe1xuLy8gICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbi8vICAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDI+Y2xpY2sgdG8gZmV0Y2ggYW5kIHBsYXk8L2gyPlwiXG4vLyAgICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmZldGNoTlBsYXkuYmluZCh0aGlzKSk7XG4vLyAgICAgfVxuXG4vLyAgICAgZmV0Y2hOUGxheSgpe1xuLy8gICAgICAgICAvLyBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4vLyAgICAgICAgIGNvbnN0IGN0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuLy8gICAgICAgICBsZXQgYXVkaW87XG5cbi8vICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzEyMzk0MS9Zb2RlbF9Tb3VuZF9FZmZlY3QubXAzJylcbi8vICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5hcnJheUJ1ZmZlcigpKVxuLy8gICAgICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4gY3R4LmRlY29kZUF1ZGlvRGF0YShhcnJheUJ1ZmZlcikpXG4vLyAgICAgICAgICAgICAudGhlbihkZWNvZGVkQXVkaW8gPT4ge1xuLy8gICAgICAgICAgICAgICAgIGF1ZGlvID0gZGVjb2RlZEF1ZGlvO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhhdWRpbyk7XG4vLyAgICAgICAgIC8vXl5mZXRjaCBhZHVpbyBmaWxlLCBwdXQgaW50byBidWZmZXIsIGRlY29kZSBpdCB0b2JlIGFibGVcbi8vICAgICAgICAgLy90b3dvcmsgd2l0aCBpdCBhcyBhbmF1ZGlvIG5vZGVcbi8vICAgICAgICAgY29uc3QgcGxheVNvdW5kID0gY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuLy8gICAgICAgICBwbGF5U291bmQuYnVmZmVyID0gYXVkaW87XG4vLyAgICAgICAgIHBsYXlTb3VuZC5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbik7XG4vLyAgICAgICAgIHBsYXlTb3VuZC5zdGFydChjdHguY3VycmVudFRpbWUpO1xuXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGN0eCk7XG5cbi8vICAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDI+cGxheWluZy4uLjwvaDI+XCJcbi8vICAgICB9XG4vLyB9XG5cbiAgICAgICAgLy8gbGV0IGF1ZGlvO1xuXG4gICAgICAgIC8vIGZldGNoKGBpbnN0cnVtZW50YWxzLyR7c29uZ30ubXAzYClcbiAgICAgICAgLy8gICAgIC50aGVuKGF1ZGlvRGF0YSA9PiBhdWRpb0RhdGEuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgLy8gICAgIC50aGVuKGJ1ZmZlcmVkID0+IGNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlcmVkKSlcbiAgICAgICAgLy8gICAgIC50aGVuKGJ1ZmZlcmVkID0+IGF1ZGlvID0gYnVmZmVyZWQpXG5cbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGF1ZGlvKTsiXSwibmFtZXMiOlsiRmV0Y2hBdWRpbyIsImNvbnN0cnVjdG9yIiwic2VsZWN0IiwicGxheSIsImF1ZGlvIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFNvbmciLCJiaW5kIiwicGxheUZ1bmMiLCJzdGF0ZSIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInBhdXNlIiwiZWxlIiwic29uZyIsInRhcmdldCIsInZhbHVlIiwiQXVkaW8iLCJjb250ZXh0IiwiQXVkaW9Db250ZXh0Iiwic291cmNlIiwiY3JlYXRlTWVkaWFFbGVtZW50U291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/fetch_audio.js\n");

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