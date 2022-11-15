// const { default: PlaybackButton } = require("./scripts/play_button.js");
const { default: FetchInstrumental } = require("./scripts/fetch_instrumental.js");
const { default: FetchVocal } = require("./scripts/fetch_vocal.js");
const { default: PlayBoth } = require("./scripts/play_both.js");

// document.addEventListener("DOMContentLoaded", ()=>{
//     const playing = document.getElementById("play/pause");
//     new PlaybackButton(playing);
// })

document.addEventListener("DOMContentLoaded", ()=>{
    const instrumental = document.querySelector(".instrumentals");
    const playing = document.getElementById("play/pause");
    const inst = new FetchInstrumental(instrumental, playing);

    const instrumental2 = document.querySelector(".vocals");
    const playing2 = document.getElementById("play/pause_vocals");
    const vol = new FetchVocal(instrumental2, playing2);
    // console.log(instrumental);

    const playButton = document.querySelector(".playboth");
    new PlayBoth(playButton, inst, vol);
})

// document.addEventListener("DOMContentLoaded", ()=>{
//     const instrumental = document.querySelector(".vocals");
//     const playing = document.getElementById("play/pause_vocals");
//     new FetchVocal(instrumental, playing);
// })

// document.addEventListener("DOMContentLoaded", ()=>{

// })

