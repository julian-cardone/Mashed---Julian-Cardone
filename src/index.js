const { default: PlaybackButton } = require("./scripts/play_button.js");
const { default: FetchAudio } = require("./scripts/fetch_audio.js");

document.addEventListener("DOMContentLoaded", ()=>{
    const playing = document.getElementById("play/pause");
    new PlaybackButton(playing);
})

document.addEventListener("DOMContentLoaded", ()=>{
    const instrumental = document.querySelector(".instrumentals");
    new FetchAudio(instrumental);
    // console.log(instrumental);
})