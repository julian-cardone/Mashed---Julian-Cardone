// import PlaybackButton from "./play_button";

class FetchInstrumental{
    constructor(select, play){
        this.select = select;
        this.play = play;
        this.audio;
        this.select.addEventListener("change", this.setSong.bind(this));
        this.play.addEventListener("click", this.playFunc.bind(this));
        // this.footer = document.querySelector(".footer");
    }

    playFunc(){

        let state = this.play.getAttribute("data-playing");

        if (state === "paused"){
            // this.setSpeedHere(this.audio);
            this.play.setAttribute("data-playing", "playing")
            this.play.innerHTML = "◼";
            this.play.style.padding = "0% 0.6% 0% 0.5%";
            // this.footer.style.opacity = "0.5";
            this.audio.play()
        } else{
            this.play.setAttribute("data-playing", "paused");
            this.audio.pause();
            this.play.innerHTML = "▶";
            // this.footer.style.opacity = "1";
        }

    }

    isPlaying(){
        let state = this.play.getAttribute("data-playing");
        return (state === "paused");
    }

    //dont make it 'playing' when selecting play/pause on the placeholder

    setSong(ele){

        //selecting play/pause on 'select isntrumental' will make it be paused so that when you select a song it begins in the paused state

        if (this.audio){
            this.audio.pause();
            this.play.setAttribute("data-playing", "paused");
        }

        let obj = event.target[event.target.selectedIndex];
        //this is great to know!!^^

        let audio = new Audio(`instrumentals/${ele.target.value}.mp3`);
        
        let context = new AudioContext();
        
        const source = context.createMediaElementSource(audio);
        source.connect(context.destination);
        
        this.audio = audio;

        new Frequency(this.audio, obj);
        
        }
    
    // this.ele.children[0].innerText = "Ouch!";
}

export default FetchInstrumental;
import BeatMatch from "./beat_match_button";
import Frequency from "./playback_speed_inst";
import PlayBoth from "./play_both";


// class AudioFetch {

//     constructor(ele){
//         this.ele = ele;
//         this.ele.innerHTML = "<h2>click to fetch and play</h2>"
//         this.ele.addEventListener("click", this.fetchNPlay.bind(this));
//     }

//     fetchNPlay(){
//         // const AudioContext = window.AudioContext || window.webkitAudioContext;
//         const ctx = new AudioContext();

//         let audio;

//         fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3')
//             .then(data => data.arrayBuffer())
//             .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
//             .then(decodedAudio => {
//                 audio = decodedAudio;
//             });
//             console.log(audio);
//         //^^fetch aduio file, put into buffer, decode it tobe able
//         //towork with it as anaudio node
//         const playSound = ctx.createBufferSource();
//         playSound.buffer = audio;
//         playSound.connect(ctx.destination);
//         playSound.start(ctx.currentTime);

//         console.log(ctx);

//         this.ele.innerHTML = "<h2>playing...</h2>"
//     }
// }

        // let audio;

        // fetch(`instrumentals/${song}.mp3`)
        //     .then(audioData => audioData.arrayBuffer())
        //     .then(buffered => context.decodeAudioData(buffered))
        //     .then(buffered => audio = buffered)

        //     console.log(audio);