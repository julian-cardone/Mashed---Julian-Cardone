const { default: Example } = require("./scripts/example.js");
const { default: AudioFetch } = require("./scripts/audio_fetch.js");

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);
});

document.addEventListener("DOMContentLoaded", () => {
    const playback = document.getElementById("playback");
    new AudioFetch(playback);
});
