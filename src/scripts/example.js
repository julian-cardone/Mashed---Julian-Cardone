class Example {
    constructor(ele){
        this.ele = ele;
        this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>"

        this.ele.addEventListener("click", this.handleClick.bind(this));
    }

    handleClick(){
        this.ele.children[0].innerText = "Ouch!";
        const ctx = new AudioContext();

let audio;

fetch("./instrumentals/levels.mp3")
    .then(data => data.arrayBuffer())
    .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
    .then(decodedAudio => {
        audio = decodedAudio;
    });

//^^fetch aduio file, put into buffer, decode it tobe able
//towork with it as anaudio node

function playback(){
    const playSound = ctx.createBufferSource();
    playSound.buffer = audio;
    playSound.connect(ctx.destination)
    playSound.start(ctx.currentTime);
}

window.addEventListener("click", playback);
    }
}

export default Example;
