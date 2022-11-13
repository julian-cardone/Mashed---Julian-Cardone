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
eval("__webpack_require__.r(__webpack_exports__);\nclass FetchAudio {\n  constructor(ele) {\n    this.ele = ele;\n\n    // for (let i = 1; i < this.ele.length; i++){\n    //     console.log(this.ele[i]);\n    //     this.ele.addEventListener(\"change\", this.loadSong.bind(this.ele[i]))\n    // }\n\n    this.ele.addEventListener(\"change\", this.fetchSong.bind(this));\n  }\n  fetchSong(ele) {\n    let song = ele.target.value;\n    let context = new AudioContext();\n    let audio = new Audio(`instrumentals/${song}.mp3`);\n    const source = context.createMediaElementSource(audio);\n    source.connect(context.destination);\n    audio.play();\n\n    // let audio;\n\n    // fetch(`instrumentals/${song}.mp3`)\n    //     .then(audioData => audioData.arrayBuffer())\n    //     .then(buffered => context.decodeAudioData(buffered))\n    //     .then(buffered => audio = buffered)\n\n    //     console.log(audio);\n  }\n}\n\n// this.ele.children[0].innerText = \"Ouch!\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FetchAudio);\n\n// class AudioFetch {\n\n//     constructor(ele){\n//         this.ele = ele;\n//         this.ele.innerHTML = \"<h2>click to fetch and play</h2>\"\n//         this.ele.addEventListener(\"click\", this.fetchNPlay.bind(this));\n//     }\n\n//     fetchNPlay(){\n//         // const AudioContext = window.AudioContext || window.webkitAudioContext;\n//         const ctx = new AudioContext();\n\n//         let audio;\n\n//         fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3')\n//             .then(data => data.arrayBuffer())\n//             .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))\n//             .then(decodedAudio => {\n//                 audio = decodedAudio;\n//             });\n//             console.log(audio);\n//         //^^fetch aduio file, put into buffer, decode it tobe able\n//         //towork with it as anaudio node\n//         const playSound = ctx.createBufferSource();\n//         playSound.buffer = audio;\n//         playSound.connect(ctx.destination);\n//         playSound.start(ctx.currentTime);\n\n//         console.log(ctx);\n\n//         this.ele.innerHTML = \"<h2>playing...</h2>\"\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mZXRjaF9hdWRpby5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQ0EsTUFBTUEsVUFBVSxDQUFDO0VBQ2JDLFdBQVcsQ0FBQ0MsR0FBRyxFQUFDO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7O0lBRWQ7SUFDQTtJQUNBO0lBQ0E7O0lBRUEsSUFBSSxDQUFDQSxHQUFHLENBQUNDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBRWxFO0VBRUFELFNBQVMsQ0FBQ0YsR0FBRyxFQUFDO0lBRVYsSUFBSUksSUFBSSxHQUFHSixHQUFHLENBQUNLLE1BQU0sQ0FBQ0MsS0FBSztJQUUzQixJQUFJQyxPQUFPLEdBQUcsSUFBSUMsWUFBWSxFQUFFO0lBRWhDLElBQUlDLEtBQUssR0FBRyxJQUFJQyxLQUFLLENBQUUsaUJBQWdCTixJQUFLLE1BQUssQ0FBQztJQUVsRCxNQUFNTyxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0ssd0JBQXdCLENBQUNILEtBQUssQ0FBQztJQUN0REUsTUFBTSxDQUFDRSxPQUFPLENBQUNOLE9BQU8sQ0FBQ08sV0FBVyxDQUFDO0lBRW5DTCxLQUFLLENBQUNNLElBQUksRUFBRTs7SUFFWjs7SUFFQTtJQUNBO0lBQ0E7SUFDQTs7SUFFQTtFQUNBO0FBQ0o7O0FBRUE7O0FBR0osK0RBQWVqQixVQUFVLEVBQUM7O0FBRzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQvLi9zcmMvc2NyaXB0cy9mZXRjaF9hdWRpby5qcz9iZjlmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgRmV0Y2hBdWRpbyB7XG4gICAgY29uc3RydWN0b3IoZWxlKXtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmVsZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZVtpXSk7XG4gICAgICAgIC8vICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIHRoaXMubG9hZFNvbmcuYmluZCh0aGlzLmVsZVtpXSkpXG4gICAgICAgIC8vIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5mZXRjaFNvbmcuYmluZCh0aGlzKSk7XG5cbiAgICB9XG5cbiAgICBmZXRjaFNvbmcoZWxlKXtcblxuICAgICAgICBsZXQgc29uZyA9IGVsZS50YXJnZXQudmFsdWU7XG5cbiAgICAgICAgbGV0IGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbiAgICAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKGBpbnN0cnVtZW50YWxzLyR7c29uZ30ubXAzYCk7XG5cbiAgICAgICAgY29uc3Qgc291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xuICAgICAgICBzb3VyY2UuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgICAgICBhdWRpby5wbGF5KCk7XG5cbiAgICAgICAgLy8gbGV0IGF1ZGlvO1xuXG4gICAgICAgIC8vIGZldGNoKGBpbnN0cnVtZW50YWxzLyR7c29uZ30ubXAzYClcbiAgICAgICAgLy8gICAgIC50aGVuKGF1ZGlvRGF0YSA9PiBhdWRpb0RhdGEuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgLy8gICAgIC50aGVuKGJ1ZmZlcmVkID0+IGNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKGJ1ZmZlcmVkKSlcbiAgICAgICAgLy8gICAgIC50aGVuKGJ1ZmZlcmVkID0+IGF1ZGlvID0gYnVmZmVyZWQpXG5cbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGF1ZGlvKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvLyB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2ghXCI7XG4gICAgXG5cbmV4cG9ydCBkZWZhdWx0IEZldGNoQXVkaW87XG5cblxuLy8gY2xhc3MgQXVkaW9GZXRjaCB7XG5cbi8vICAgICBjb25zdHJ1Y3RvcihlbGUpe1xuLy8gICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbi8vICAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDI+Y2xpY2sgdG8gZmV0Y2ggYW5kIHBsYXk8L2gyPlwiXG4vLyAgICAgICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmZldGNoTlBsYXkuYmluZCh0aGlzKSk7XG4vLyAgICAgfVxuXG4vLyAgICAgZmV0Y2hOUGxheSgpe1xuLy8gICAgICAgICAvLyBjb25zdCBBdWRpb0NvbnRleHQgPSB3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQ7XG4vLyAgICAgICAgIGNvbnN0IGN0eCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcblxuLy8gICAgICAgICBsZXQgYXVkaW87XG5cbi8vICAgICAgICAgZmV0Y2goJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzEyMzk0MS9Zb2RlbF9Tb3VuZF9FZmZlY3QubXAzJylcbi8vICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gZGF0YS5hcnJheUJ1ZmZlcigpKVxuLy8gICAgICAgICAgICAgLnRoZW4oYXJyYXlCdWZmZXIgPT4gY3R4LmRlY29kZUF1ZGlvRGF0YShhcnJheUJ1ZmZlcikpXG4vLyAgICAgICAgICAgICAudGhlbihkZWNvZGVkQXVkaW8gPT4ge1xuLy8gICAgICAgICAgICAgICAgIGF1ZGlvID0gZGVjb2RlZEF1ZGlvO1xuLy8gICAgICAgICAgICAgfSk7XG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhhdWRpbyk7XG4vLyAgICAgICAgIC8vXl5mZXRjaCBhZHVpbyBmaWxlLCBwdXQgaW50byBidWZmZXIsIGRlY29kZSBpdCB0b2JlIGFibGVcbi8vICAgICAgICAgLy90b3dvcmsgd2l0aCBpdCBhcyBhbmF1ZGlvIG5vZGVcbi8vICAgICAgICAgY29uc3QgcGxheVNvdW5kID0gY3R4LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuLy8gICAgICAgICBwbGF5U291bmQuYnVmZmVyID0gYXVkaW87XG4vLyAgICAgICAgIHBsYXlTb3VuZC5jb25uZWN0KGN0eC5kZXN0aW5hdGlvbik7XG4vLyAgICAgICAgIHBsYXlTb3VuZC5zdGFydChjdHguY3VycmVudFRpbWUpO1xuXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKGN0eCk7XG5cbi8vICAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDI+cGxheWluZy4uLjwvaDI+XCJcbi8vICAgICB9XG4vLyB9Il0sIm5hbWVzIjpbIkZldGNoQXVkaW8iLCJjb25zdHJ1Y3RvciIsImVsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmZXRjaFNvbmciLCJiaW5kIiwic29uZyIsInRhcmdldCIsInZhbHVlIiwiY29udGV4dCIsIkF1ZGlvQ29udGV4dCIsImF1ZGlvIiwiQXVkaW8iLCJzb3VyY2UiLCJjcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/fetch_audio.js\n");

/***/ }),

/***/ "./src/scripts/play_button.js":
/*!************************************!*\
  !*** ./src/scripts/play_button.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// import { construct } from \"core-js/fn/reflect\";\n\nclass PlaybackButton {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.addEventListener(\"click\", this.changePlayback.bind(this));\n  }\n  changePlayback() {\n    // const playing = document.getElementById(\"play/pause\");\n\n    let state = this.ele.getAttribute(\"data-playing\");\n    state === \"paused\" ? this.ele.setAttribute(\"data-playing\", \"playing\") : this.ele.setAttribute(\"data-playing\", \"paused\");\n    this.playFunc();\n  }\n  playFunc() {\n    // console.log('working!');\n    this.changePlayback() === \"paused\" ? audioElement.play : audioElement.pause;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlaybackButton);\n\n// const AudioContext = window.AudioContext || window.webkitAudioContext;\n\n// const audioContext = new AudioContext();\n\n// // get the audio element\n// const audioElement = document.querySelector(\"audio\");\n\n// // pass it into the audio context\n// const track = audioContext.createMediaElementSource(audioElement);\n\n// track.connect(audioContext.destination);\n\n// // Select our play button\n// const playButton = document.querySelector(\"button\");\n\n// playButton.addEventListener(\n//   \"click\",\n//   () => {\n//     // Check if context is in suspended state (autoplay policy)\n//     if (audioContext.state === \"suspended\") {\n//       audioContext.resume();\n//         }\n\n//     // Play or pause track depending on state\n//     if (playButton.dataset.playing === \"false\") {\n//       audioElement.play();\n//       playButton.dataset.playing = \"true\";\n//     } else if (playButton.dataset.playing === \"true\") {\n//       audioElement.pause();\n//       playButton.dataset.playing = \"false\";\n//     }\n//   },\n//   false\n// );\n\n// audioElement.addEventListener(\n//     \"ended\",\n//     () => {\n//       playButton.dataset.playing = \"false\";\n//     },\n//     false\n//   );\n\n// export default AudioFetch;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5X2J1dHRvbi5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7O0FBR0EsTUFBTUEsY0FBYztFQUVoQkMsV0FBVyxDQUFDQyxHQUFHLEVBQUM7SUFDWixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUN0RTtFQUVBRCxjQUFjLEdBQUU7SUFFWjs7SUFFQSxJQUFJRSxLQUFLLEdBQUcsSUFBSSxDQUFDSixHQUFHLENBQUNLLFlBQVksQ0FBQyxjQUFjLENBQUM7SUFFakRELEtBQUssS0FBSyxRQUFRLEdBQUcsSUFBSSxDQUFDSixHQUFHLENBQUNNLFlBQVksQ0FBQyxjQUFjLEVBQUUsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDTixHQUFHLENBQUNNLFlBQVksQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDO0lBRXZILElBQUksQ0FBQ0MsUUFBUSxFQUFFO0VBQ25CO0VBRUFBLFFBQVEsR0FBRTtJQUVOO0lBQ0EsSUFBSSxDQUFDTCxjQUFjLEVBQUUsS0FBSyxRQUFRLEdBQUdNLFlBQVksQ0FBQ0MsSUFBSSxHQUFHRCxZQUFZLENBQUNFLEtBQUs7RUFDL0U7QUFDSjtBQUdBLCtEQUFlWixjQUFjLEVBQUM7O0FBSTlCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0Ly4vc3JjL3NjcmlwdHMvcGxheV9idXR0b24uanM/ZjQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjb25zdHJ1Y3QgfSBmcm9tIFwiY29yZS1qcy9mbi9yZWZsZWN0XCI7XG5cblxuY2xhc3MgUGxheWJhY2tCdXR0b257XG5cbiAgICBjb25zdHJ1Y3RvcihlbGUpe1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgdGhpcy5lbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2hhbmdlUGxheWJhY2suYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGxheWJhY2soKXtcblxuICAgICAgICAvLyBjb25zdCBwbGF5aW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5L3BhdXNlXCIpO1xuXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuZWxlLmdldEF0dHJpYnV0ZShcImRhdGEtcGxheWluZ1wiKTtcblxuICAgICAgICBzdGF0ZSA9PT0gXCJwYXVzZWRcIiA/IHRoaXMuZWxlLnNldEF0dHJpYnV0ZShcImRhdGEtcGxheWluZ1wiLCBcInBsYXlpbmdcIikgOiB0aGlzLmVsZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXBsYXlpbmdcIiwgXCJwYXVzZWRcIik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBsYXlGdW5jKCk7XG4gICAgfVxuXG4gICAgcGxheUZ1bmMoKXtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnd29ya2luZyEnKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VQbGF5YmFjaygpID09PSBcInBhdXNlZFwiID8gYXVkaW9FbGVtZW50LnBsYXkgOiBhdWRpb0VsZW1lbnQucGF1c2U7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBsYXliYWNrQnV0dG9uO1xuXG5cblxuLy8gY29uc3QgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0O1xuXG4vLyBjb25zdCBhdWRpb0NvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG5cbi8vIC8vIGdldCB0aGUgYXVkaW8gZWxlbWVudFxuLy8gY29uc3QgYXVkaW9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImF1ZGlvXCIpO1xuXG4vLyAvLyBwYXNzIGl0IGludG8gdGhlIGF1ZGlvIGNvbnRleHRcbi8vIGNvbnN0IHRyYWNrID0gYXVkaW9Db250ZXh0LmNyZWF0ZU1lZGlhRWxlbWVudFNvdXJjZShhdWRpb0VsZW1lbnQpO1xuXG4vLyB0cmFjay5jb25uZWN0KGF1ZGlvQ29udGV4dC5kZXN0aW5hdGlvbik7XG5cbi8vIC8vIFNlbGVjdCBvdXIgcGxheSBidXR0b25cbi8vIGNvbnN0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYnV0dG9uXCIpO1xuXG4vLyBwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4vLyAgIFwiY2xpY2tcIixcbi8vICAgKCkgPT4ge1xuLy8gICAgIC8vIENoZWNrIGlmIGNvbnRleHQgaXMgaW4gc3VzcGVuZGVkIHN0YXRlIChhdXRvcGxheSBwb2xpY3kpXG4vLyAgICAgaWYgKGF1ZGlvQ29udGV4dC5zdGF0ZSA9PT0gXCJzdXNwZW5kZWRcIikge1xuLy8gICAgICAgYXVkaW9Db250ZXh0LnJlc3VtZSgpO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAvLyBQbGF5IG9yIHBhdXNlIHRyYWNrIGRlcGVuZGluZyBvbiBzdGF0ZVxuLy8gICAgIGlmIChwbGF5QnV0dG9uLmRhdGFzZXQucGxheWluZyA9PT0gXCJmYWxzZVwiKSB7XG4vLyAgICAgICBhdWRpb0VsZW1lbnQucGxheSgpO1xuLy8gICAgICAgcGxheUJ1dHRvbi5kYXRhc2V0LnBsYXlpbmcgPSBcInRydWVcIjtcbi8vICAgICB9IGVsc2UgaWYgKHBsYXlCdXR0b24uZGF0YXNldC5wbGF5aW5nID09PSBcInRydWVcIikge1xuLy8gICAgICAgYXVkaW9FbGVtZW50LnBhdXNlKCk7XG4vLyAgICAgICBwbGF5QnV0dG9uLmRhdGFzZXQucGxheWluZyA9IFwiZmFsc2VcIjtcbi8vICAgICB9XG4vLyAgIH0sXG4vLyAgIGZhbHNlXG4vLyApO1xuXG4vLyBhdWRpb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbi8vICAgICBcImVuZGVkXCIsXG4vLyAgICAgKCkgPT4ge1xuLy8gICAgICAgcGxheUJ1dHRvbi5kYXRhc2V0LnBsYXlpbmcgPSBcImZhbHNlXCI7XG4vLyAgICAgfSxcbi8vICAgICBmYWxzZVxuLy8gICApO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBBdWRpb0ZldGNoOyJdLCJuYW1lcyI6WyJQbGF5YmFja0J1dHRvbiIsImNvbnN0cnVjdG9yIiwiZWxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoYW5nZVBsYXliYWNrIiwiYmluZCIsInN0YXRlIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicGxheUZ1bmMiLCJhdWRpb0VsZW1lbnQiLCJwbGF5IiwicGF1c2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/play_button.js\n");

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