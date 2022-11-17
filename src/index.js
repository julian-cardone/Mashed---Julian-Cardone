// const { default: PlaybackButton } = require("./scripts/play_button.js");
const { default: BeatMatch } = require("./scripts/beat_match_button.js");
const { default: FetchInstrumental } = require("./scripts/fetch_instrumental.js");
const { default: FetchVocal } = require("./scripts/fetch_vocal.js");
const { default: Frequency } = require("./scripts/playback_speed_inst.js");
const { default: VocalSpeed } = require("./scripts/playback_speed_voc.js");
const { default: PlayBoth } = require("./scripts/play_both.js");
// const { default: BeatMatch } = require("./scripts/beat_match_button.js");

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

    // const matchButton = document.querySelector(".matchButton");
    // const instBpm = document.getElementById("instrumentalBPM");
    // const vocBpm = document.getElementById("vocalBPM");
    // new BeatMatch(matchButton, instBpm, vocBpm);
})

// document.addEventListener("DOMContentLoaded", ()=>{
//     const instrumental = document.querySelector(".vocals");
//     const playing = document.getElementById("play/pause_vocals");
//     new FetchVocal(instrumental, playing);
// })

// document.addEventListener("DOMContentLoaded", ()=>{

// })

