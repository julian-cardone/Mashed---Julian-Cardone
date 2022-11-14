
class FetchAudio {
    constructor(ele){
        this.ele = ele;

        // for (let i = 1; i < this.ele.length; i++){
        //     console.log(this.ele[i]);
        //     this.ele.addEventListener("change", this.loadSong.bind(this.ele[i]))
        // }
        
        this.ele.addEventListener("change", this.setSong.bind(this));

    }

    setSong(ele){

        let song = ele.target.value;

        let audio = new Audio(`instrumentals/${song}.mp3`);
        
        let context = new AudioContext();

        const source = context.createMediaElementSource(audio);
        source.connect(context.destination);

        return audio;

        // let audio;

        // fetch(`instrumentals/${song}.mp3`)
        //     .then(audioData => audioData.arrayBuffer())
        //     .then(buffered => context.decodeAudioData(buffered))
        //     .then(buffered => audio = buffered)

        //     console.log(audio);
        }
    }
    
    // this.ele.children[0].innerText = "Ouch!";
    

export default FetchAudio;


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