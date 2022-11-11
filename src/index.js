const { default: Example } = require("./scripts/example.js");

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);
});
