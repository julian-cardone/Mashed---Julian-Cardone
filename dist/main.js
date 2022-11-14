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

eval("const {\n  default: PlaybackButton\n} = __webpack_require__(/*! ./scripts/play_button.js */ \"./src/scripts/play_button.js\");\nconst {\n  default: FetchAudio\n} = __webpack_require__(/*! ./scripts/fetch_audio.js */ \"./src/scripts/fetch_audio.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const playing = document.getElementById(\"play/pause\");\n  new PlaybackButton(playing);\n});\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const instrumental = document.querySelector(\".instrumentals\");\n  new FetchAudio(instrumental);\n  // console.log(instrumental);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTTtFQUFFQSxPQUFPLEVBQUVDO0FBQWUsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLDhEQUEwQixDQUFDO0FBQ3ZFLE1BQU07RUFBRUYsT0FBTyxFQUFFRztBQUFXLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyw4REFBMEIsQ0FBQztBQUVuRUUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFJO0VBQzlDLE1BQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsWUFBWSxDQUFDO0VBQ3JELElBQUlOLGNBQWMsQ0FBQ0ssT0FBTyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUVGRixRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQUk7RUFDOUMsTUFBTUcsWUFBWSxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUM3RCxJQUFJTixVQUFVLENBQUNLLFlBQVksQ0FBQztFQUM1QjtBQUNKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGRlZmF1bHQ6IFBsYXliYWNrQnV0dG9uIH0gPSByZXF1aXJlKFwiLi9zY3JpcHRzL3BsYXlfYnV0dG9uLmpzXCIpO1xuY29uc3QgeyBkZWZhdWx0OiBGZXRjaEF1ZGlvIH0gPSByZXF1aXJlKFwiLi9zY3JpcHRzL2ZldGNoX2F1ZGlvLmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xuICAgIGNvbnN0IHBsYXlpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXkvcGF1c2VcIik7XG4gICAgbmV3IFBsYXliYWNrQnV0dG9uKHBsYXlpbmcpO1xufSlcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgICBjb25zdCBpbnN0cnVtZW50YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluc3RydW1lbnRhbHNcIik7XG4gICAgbmV3IEZldGNoQXVkaW8oaW5zdHJ1bWVudGFsKTtcbiAgICAvLyBjb25zb2xlLmxvZyhpbnN0cnVtZW50YWwpO1xufSkiXSwibmFtZXMiOlsiZGVmYXVsdCIsIlBsYXliYWNrQnV0dG9uIiwicmVxdWlyZSIsIkZldGNoQXVkaW8iLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5aW5nIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnN0cnVtZW50YWwiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/fetch_audio.js":
/*!************************************!*\
  !*** ./src/scripts/fetch_audio.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FetchAudio {\n  constructor(ele) {\n    this.ele = ele;\n\n    // for (let i = 1; i < this.ele.length; i++){\n    //     console.log(this.ele[i]);\n    //     this.ele.addEventListener(\"change\", this.loadSong.bind(this.ele[i]))\n    // }\n\n    this.ele.addEventListener(\"change\", this.setSong.bind(this));\n  }\n  setSong(ele) {\n    let song = ele.target.value;\n    let audio = new Audio(`instrumentals/${song}.mp3`);\n    let context = new AudioContext();\n    const source = context.createMediaElementSource(audio);\n    source.connect(context.destination);\n    return audio;\n\n    // let audio;\n\n    // fetch(`instrumentals/${song}.mp3`)\n    //     .then(audioData => audioData.arrayBuffer())\n    //     .then(buffered => context.decodeAudioData(buffered))\n    //     .then(buffered => audio = buffered)\n\n    //     console.log(audio);\n  }\n}\n\n// this.ele.children[0].innerText = \"Ouch!\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FetchAudio);\n\n// class AudioFetch {\n\n//     constructor(ele){\n//         this.ele = ele;\n//         this.ele.innerHTML = \"<h2>click to fetch and play</h2>\"\n//         this.ele.addEventListener(\"click\", this.fetchNPlay.bind(this));\n//     }\n\n//     fetchNPlay(){\n//         // const AudioContext = window.AudioContext || window.webkitAudioContext;\n//         const ctx = new AudioContext();\n\n//         let audio;\n\n//         fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3')\n//             .then(data => data.arrayBuffer())\n//             .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))\n//             .then(decodedAudio => {\n//                 audio = decodedAudio;\n//             });\n//             console.log(audio);\n//         //^^fetch aduio file, put into buffer, decode it tobe able\n//         //towork with it as anaudio node\n//         const playSound = ctx.createBufferSource();\n//         playSound.buffer = audio;\n//         playSound.connect(ctx.destination);\n//         playSound.start(ctx.currentTime);\n\n//         console.log(ctx);\n\n//         this.ele.innerHTML = \"<h2>playing...</h2>\"\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaF9hdWRpby5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsVUFBVSxDQUFDO0VBQ2JDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7O0lBRWQ7SUFDQTtJQUNBO0lBQ0E7O0lBRUEsSUFBSSxDQUFDQSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBRWhFO0VBRUFELE9BQU8sQ0FBQ0YsR0FBRyxFQUFDO0lBRVIsSUFBSUksSUFBSSxHQUFHSixHQUFHLENBQUNLLE1BQU0sQ0FBQ0MsS0FBSztJQUUzQixJQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSyxDQUFFLGlCQUFnQkosSUFBSyxNQUFLLENBQUM7SUFFbEQsSUFBSUssT0FBTyxHQUFHLElBQUlDLFlBQVksRUFBRTtJQUVoQyxNQUFNQyxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0csd0JBQXdCLENBQUNMLEtBQUssQ0FBQztJQUN0REksTUFBTSxDQUFDRSxPQUFPLENBQUNKLE9BQU8sQ0FBQ0ssV0FBVyxDQUFDO0lBRW5DLE9BQU9QLEtBQUs7O0lBRVo7O0lBRUE7SUFDQTtJQUNBO0lBQ0E7O0lBRUE7RUFDQTtBQUNKOztBQUVBOztBQUdKLCtEQUFlVCxVQUFVLEVBQUM7O0FBRzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQvLi9zcmMvc2NyaXB0cy9mZXRjaF9hdWRpby5qcz9iZjlmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgRmV0Y2hBdWRpbyB7XG4gICAgY29uc3RydWN0b3IoZWxlKXtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmVsZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZVtpXSk7XG4gICAgICAgIC8vICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMubG9hZFNvbmcuYmluZCh0aGlzLmVsZVtpXSkpXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5zZXRTb25nLmJpbmQodGhpcykpO1xuXG4gICAgfVxuXG4gICAgc2V0U29uZyhlbGUpe1xuXG4gICAgICAgIGxldCBzb25nID0gZWxlLnRhcmdldC52YWx1ZTtcblxuICAgICAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oYGluc3RydW1lbnRhbHMvJHtzb25nfS5tcDNgKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGNvbnRleHQuY3JlYXRlTWVkaWFFbGVtZW50U291cmNlKGF1ZGlvKTtcbiAgICAgICAgc291cmNlLmNvbm5lY3QoY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGF1ZGlvO1xuXG4gICAgICAgIC8vIGxldCBhdWRpbztcblxuICAgICAgICAvLyBmZXRjaChgaW5zdHJ1bWVudGFscy8ke3Nvbmd9Lm1wM2ApXG4gICAgICAgIC8vICAgICAudGhlbihhdWRpb0RhdGEgPT4gYXVkaW9EYXRhLmFycmF5QnVmZmVyKCkpXG4gICAgICAgIC8vICAgICAudGhlbihidWZmZXJlZCA9PiBjb250ZXh0LmRlY29kZUF1ZGlvRGF0YShidWZmZXJlZCkpXG4gICAgICAgIC8vICAgICAudGhlbihidWZmZXJlZCA9PiBhdWRpbyA9IGJ1ZmZlcmVkKVxuXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhhdWRpbyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoIVwiO1xuICAgIFxuXG5leHBvcnQgZGVmYXVsdCBGZXRjaEF1ZGlvO1xuXG5cbi8vIGNsYXNzIEF1ZGlvRmV0Y2gge1xuXG4vLyAgICAgY29uc3RydWN0b3IoZWxlKXtcbi8vICAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4vLyAgICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgyPmNsaWNrIHRvIGZldGNoIGFuZCBwbGF5PC9oMj5cIlxuLy8gICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5mZXRjaE5QbGF5LmJpbmQodGhpcykpO1xuLy8gICAgIH1cblxuLy8gICAgIGZldGNoTlBsYXkoKXtcbi8vICAgICAgICAgLy8gY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuLy8gICAgICAgICBjb25zdCBjdHggPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbi8vICAgICAgICAgbGV0IGF1ZGlvO1xuXG4vLyAgICAgICAgIGZldGNoKCdodHRwczovL3MzLXVzLXdlc3QtMi5hbWF6b25hd3MuY29tL3MuY2Rwbi5pby8xMjM5NDEvWW9kZWxfU291bmRfRWZmZWN0Lm1wMycpXG4vLyAgICAgICAgICAgICAudGhlbihkYXRhID0+IGRhdGEuYXJyYXlCdWZmZXIoKSlcbi8vICAgICAgICAgICAgIC50aGVuKGFycmF5QnVmZmVyID0+IGN0eC5kZWNvZGVBdWRpb0RhdGEoYXJyYXlCdWZmZXIpKVxuLy8gICAgICAgICAgICAgLnRoZW4oZGVjb2RlZEF1ZGlvID0+IHtcbi8vICAgICAgICAgICAgICAgICBhdWRpbyA9IGRlY29kZWRBdWRpbztcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coYXVkaW8pO1xuLy8gICAgICAgICAvL15eZmV0Y2ggYWR1aW8gZmlsZSwgcHV0IGludG8gYnVmZmVyLCBkZWNvZGUgaXQgdG9iZSBhYmxlXG4vLyAgICAgICAgIC8vdG93b3JrIHdpdGggaXQgYXMgYW5hdWRpbyBub2RlXG4vLyAgICAgICAgIGNvbnN0IHBsYXlTb3VuZCA9IGN0eC5jcmVhdGVCdWZmZXJTb3VyY2UoKTtcbi8vICAgICAgICAgcGxheVNvdW5kLmJ1ZmZlciA9IGF1ZGlvO1xuLy8gICAgICAgICBwbGF5U291bmQuY29ubmVjdChjdHguZGVzdGluYXRpb24pO1xuLy8gICAgICAgICBwbGF5U291bmQuc3RhcnQoY3R4LmN1cnJlbnRUaW1lKTtcblxuLy8gICAgICAgICBjb25zb2xlLmxvZyhjdHgpO1xuXG4vLyAgICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgyPnBsYXlpbmcuLi48L2gyPlwiXG4vLyAgICAgfVxuLy8gfSJdLCJuYW1lcyI6WyJGZXRjaEF1ZGlvIiwiY29uc3RydWN0b3IiLCJlbGUiLCJhZGRFdmVudExpc3RlbmVyIiwic2V0U29uZyIsImJpbmQiLCJzb25nIiwidGFyZ2V0IiwidmFsdWUiLCJhdWRpbyIsIkF1ZGlvIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsInNvdXJjZSIsImNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/fetch_audio.js\n");

/***/ }),

/***/ "./src/scripts/play_button.js":
/*!************************************!*\
  !*** ./src/scripts/play_button.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch_audio */ \"./src/scripts/fetch_audio.js\");\n// import { construct } from \"core-js/fn/reflect\";\n\n\nclass PlaybackButton {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.addEventListener(\"click\", this.changePlayback.bind(this));\n  }\n  changePlayback() {\n    // const playing = document.getElementById(\"play/pause\");\n\n    let state = this.ele.getAttribute(\"data-playing\");\n    state === \"paused\" ? this.ele.setAttribute(\"data-playing\", \"playing\") : this.ele.setAttribute(\"data-playing\", \"paused\");\n    this.playFunc(audio);\n  }\n  playFunc(audio) {\n    // console.log('working!');\n    this.changePlayback() === \"paused\" ? audio.play : audio.pause;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlaybackButton);\n\n// const AudioContext = window.AudioContext || window.webkitAudioContext;\n\n// const audioContext = new AudioContext();\n\n// // get the audio element\n// const audioElement = document.querySelector(\"audio\");\n\n// // pass it into the audio context\n// const track = audioContext.createMediaElementSource(audioElement);\n\n// track.connect(audioContext.destination);\n\n// // Select our play button\n// const playButton = document.querySelector(\"button\");\n\n// playButton.addEventListener(\n//   \"click\",\n//   () => {\n//     // Check if context is in suspended state (autoplay policy)\n//     if (audioContext.state === \"suspended\") {\n//       audioContext.resume();\n//         }\n\n//     // Play or pause track depending on state\n//     if (playButton.dataset.playing === \"false\") {\n//       audioElement.play();\n//       playButton.dataset.playing = \"true\";\n//     } else if (playButton.dataset.playing === \"true\") {\n//       audioElement.pause();\n//       playButton.dataset.playing = \"false\";\n//     }\n//   },\n//   false\n// );\n\n// audioElement.addEventListener(\n//     \"ended\",\n//     () => {\n//       playButton.dataset.playing = \"false\";\n//     },\n//     false\n//   );\n\n// export default AudioFetch;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5X2J1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUFBOztBQUV1QztBQUd2QyxNQUFNQyxjQUFjO0VBRWhCQyxXQUFXLENBQUNDLEdBQUcsRUFBQztJQUNaLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQ3RFO0VBR0FELGNBQWMsR0FBRTtJQUVaOztJQUVBLElBQUlFLEtBQUssR0FBRyxJQUFJLENBQUNKLEdBQUcsQ0FBQ0ssWUFBWSxDQUFDLGNBQWMsQ0FBQztJQUVqREQsS0FBSyxLQUFLLFFBQVEsR0FBRyxJQUFJLENBQUNKLEdBQUcsQ0FBQ00sWUFBWSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUNOLEdBQUcsQ0FBQ00sWUFBWSxDQUFDLGNBQWMsRUFBRSxRQUFRLENBQUM7SUFFdkgsSUFBSSxDQUFDQyxRQUFRLENBQUNDLEtBQUssQ0FBQztFQUN4QjtFQUVBRCxRQUFRLENBQUNDLEtBQUssRUFBQztJQUVYO0lBQ0EsSUFBSSxDQUFDTixjQUFjLEVBQUUsS0FBSyxRQUFRLEdBQUdNLEtBQUssQ0FBQ0MsSUFBSSxHQUFHRCxLQUFLLENBQUNFLEtBQUs7RUFDakU7QUFDSjtBQUdBLCtEQUFlWixjQUFjLEVBQUM7O0FBSTlCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL3NjcmlwdHMvcGxheV9idXR0b24uanM/ZjQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjb25zdHJ1Y3QgfSBmcm9tIFwiY29yZS1qcy9mbi9yZWZsZWN0XCI7XG5cbmltcG9ydCBGZXRjaEF1ZGlvIGZyb20gXCIuL2ZldGNoX2F1ZGlvXCI7XG5cblxuY2xhc3MgUGxheWJhY2tCdXR0b257XG5cbiAgICBjb25zdHJ1Y3RvcihlbGUpe1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hhbmdlUGxheWJhY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cbiAgICBjaGFuZ2VQbGF5YmFjaygpe1xuXG4gICAgICAgIC8vIGNvbnN0IHBsYXlpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXkvcGF1c2VcIik7XG5cbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5lbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1wbGF5aW5nXCIpO1xuXG4gICAgICAgIHN0YXRlID09PSBcInBhdXNlZFwiID8gdGhpcy5lbGUuc2V0QXR0cmlidXRlKFwiZGF0YS1wbGF5aW5nXCIsIFwicGxheWluZ1wiKSA6IHRoaXMuZWxlLnNldEF0dHJpYnV0ZShcImRhdGEtcGxheWluZ1wiLCBcInBhdXNlZFwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGxheUZ1bmMoYXVkaW8pO1xuICAgIH1cblxuICAgIHBsYXlGdW5jKGF1ZGlvKXtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd29ya2luZyEnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5YmFjaygpID09PSBcInBhdXNlZFwiID8gYXVkaW8ucGxheSA6IGF1ZGlvLnBhdXNlO1xuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBQbGF5YmFja0J1dHRvbjtcblxuXG5cbi8vIGNvbnN0IEF1ZGlvQ29udGV4dCA9IHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dDtcblxuLy8gY29uc3QgYXVkaW9Db250ZXh0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuXG4vLyAvLyBnZXQgdGhlIGF1ZGlvIGVsZW1lbnRcbi8vIGNvbnN0IGF1ZGlvRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhdWRpb1wiKTtcblxuLy8gLy8gcGFzcyBpdCBpbnRvIHRoZSBhdWRpbyBjb250ZXh0XG4vLyBjb25zdCB0cmFjayA9IGF1ZGlvQ29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW9FbGVtZW50KTtcblxuLy8gdHJhY2suY29ubmVjdChhdWRpb0NvbnRleHQuZGVzdGluYXRpb24pO1xuXG4vLyAvLyBTZWxlY3Qgb3VyIHBsYXkgYnV0dG9uXG4vLyBjb25zdCBwbGF5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJ1dHRvblwiKTtcblxuLy8gcGxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuLy8gICBcImNsaWNrXCIsXG4vLyAgICgpID0+IHtcbi8vICAgICAvLyBDaGVjayBpZiBjb250ZXh0IGlzIGluIHN1c3BlbmRlZCBzdGF0ZSAoYXV0b3BsYXkgcG9saWN5KVxuLy8gICAgIGlmIChhdWRpb0NvbnRleHQuc3RhdGUgPT09IFwic3VzcGVuZGVkXCIpIHtcbi8vICAgICAgIGF1ZGlvQ29udGV4dC5yZXN1bWUoKTtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgLy8gUGxheSBvciBwYXVzZSB0cmFjayBkZXBlbmRpbmcgb24gc3RhdGVcbi8vICAgICBpZiAocGxheUJ1dHRvbi5kYXRhc2V0LnBsYXlpbmcgPT09IFwiZmFsc2VcIikge1xuLy8gICAgICAgYXVkaW9FbGVtZW50LnBsYXkoKTtcbi8vICAgICAgIHBsYXlCdXR0b24uZGF0YXNldC5wbGF5aW5nID0gXCJ0cnVlXCI7XG4vLyAgICAgfSBlbHNlIGlmIChwbGF5QnV0dG9uLmRhdGFzZXQucGxheWluZyA9PT0gXCJ0cnVlXCIpIHtcbi8vICAgICAgIGF1ZGlvRWxlbWVudC5wYXVzZSgpO1xuLy8gICAgICAgcGxheUJ1dHRvbi5kYXRhc2V0LnBsYXlpbmcgPSBcImZhbHNlXCI7XG4vLyAgICAgfVxuLy8gICB9LFxuLy8gICBmYWxzZVxuLy8gKTtcblxuLy8gYXVkaW9FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4vLyAgICAgXCJlbmRlZFwiLFxuLy8gICAgICgpID0+IHtcbi8vICAgICAgIHBsYXlCdXR0b24uZGF0YXNldC5wbGF5aW5nID0gXCJmYWxzZVwiO1xuLy8gICAgIH0sXG4vLyAgICAgZmFsc2Vcbi8vICAgKTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgQXVkaW9GZXRjaDsiXSwibmFtZXMiOlsiRmV0Y2hBdWRpbyIsIlBsYXliYWNrQnV0dG9uIiwiY29uc3RydWN0b3IiLCJlbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hhbmdlUGxheWJhY2siLCJiaW5kIiwic3RhdGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJwbGF5RnVuYyIsImF1ZGlvIiwicGxheSIsInBhdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/play_button.js\n");

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