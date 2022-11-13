// import { construct } from "core-js/fn/reflect";


class PlaybackButton{

    constructor(ele){
        this.ele = ele;
        this.ele.addEventListener("click", this.changePlayback.bind(this));
    }

    changePlayback(){

        // const playing = document.getElementById("play/pause");

        let state = this.ele.getAttribute("data-playing");

        state === "paused" ? this.ele.setAttribute("data-playing", "playing") : this.ele.setAttribute("data-playing", "paused");
        
        this.playFunc();
    }

    playFunc(){

        // console.log('working!');
        this.changePlayback() === "paused" ? audioElement.play : audioElement.pause;
    }
}


export default PlaybackButton;



// const AudioContext = window.AudioContext || window.webkitAudioContext;

// const audioContext = new AudioContext();

// // get the audio element
// const audioElement = document.querySelector("audio");

// // pass it into the audio context
// const track = audioContext.createMediaElementSource(audioElement);

// track.connect(audioContext.destination);

// // Select our play button
// const playButton = document.querySelector("button");

// playButton.addEventListener(
//   "click",
//   () => {
//     // Check if context is in suspended state (autoplay policy)
//     if (audioContext.state === "suspended") {
//       audioContext.resume();
//         }

//     // Play or pause track depending on state
//     if (playButton.dataset.playing === "false") {
//       audioElement.play();
//       playButton.dataset.playing = "true";
//     } else if (playButton.dataset.playing === "true") {
//       audioElement.pause();
//       playButton.dataset.playing = "false";
//     }
//   },
//   false
// );

// audioElement.addEventListener(
//     "ended",
//     () => {
//       playButton.dataset.playing = "false";
//     },
//     false
//   );

// export default AudioFetch;