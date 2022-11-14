class Frequency{

    constructor(context, bpmBox, song){
        this.context = context;
        this.bpmBox = bpmBox;
        this.song = song;
        //set interval or timeout thing for typing in the box, with play/pause as the disruptor. 
        // this.fillBox(this.context, this.bpmBox);
        this.fetchSong(context, song);
        // this.createAudioBufferSourceNode(this.context);
    }

    // fillBox(context, bpmBox){
        
    // }

    fetchSong(context, song){

        let audio;

        // debugger

        // debugger

        const load = () => {
            const request = new XMLHttpRequest();
            request.open("GET", "instrumentals/tgif.mp3");
            request.responseType = "arraybuffer";
            request.onload = function() {
              let undecodedAudio = request.response;
              context.decodeAudioData(undecodedAudio, (data) => audio = data);
            };
            request.send();
            console.log(audio);
          }

        const play = () => {
            const source = context.createBufferSource();
            source.audio = audio;
            source.connect(context.destination);
            source.start();
          };

        load();
        play();
        
    }

//     createAudioBufferSourceNode(context, audio){
//         let source = context.createBufferSource();
//         audio = new ArrayBuffer(audio);

//         context.decodeAudioData(audio, (buffer) => {
//             buffered = buffer;
//             source.buffer = buffered;
//             source.playbackRate.value = 200;
//             source.connect(context.destination);
//         })
        
//         console.log(source);
//     }
    
}

export default Frequency;

// fetch('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/Yodel_Sound_Effect.mp3')
//             .then(data => data.arrayBuffer())
//             .then(arrayBuffer => ctx.decodeAudioData(arrayBuffer))
//             .then(decodedAudio => {
//                 audio = decodedAudio;
//             });

        // let audio;

        // fetch(`instrumentals/${song}.mp3`)
        //     .then(audioData => audioData.arrayBuffer())
        //     .then(buffered => context.decodeAudioData(buffered))
        //     .then(buffered => audio = buffered)