// import { construct } from "core-js/fn/reflect";

class AudioFetch {

    constructor(ele){
        this.ele = ele;
        this.ele.innerHTML = "<h2>click to fetch and play</h2>"
        this.ele.addEventListener("click", this.fetchNPlay.bind(this));
    }

    fetchNPlay(){
        // const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();

        let audio;

        fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3')
            .then(data => data.arrayBuffer())
            .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
            .then(decodedAudio => {
                audio = decodedAudio;
            });
            console.log(audio);
        //^^fetch aduio file, put into buffer, decode it tobe able
        //towork with it as anaudio node
        const playSound = ctx.createBufferSource();
        playSound.buffer = audio;
        playSound.connect(ctx.destination);
        playSound.start(ctx.currentTime);

        console.log(ctx);

        this.ele.innerHTML = "<h2>playing...</h2>"
    }
}

export default AudioFetch;