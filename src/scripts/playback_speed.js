class Frequency{

    constructor(bpmBox, audio){
        this.bpmBox = bpmBox;
        this.audio = audio;
        //set interval or timeout thing for typing in the box, with play/pause as the disruptor. 
        // this.fillBox(this.context, this.bpmBox);
        this.setSpeed(this.bpmBox, this.audio);
        // this.createAudioBufferSourceNode(this.context);
    }

    // fillBox(context, bpmBox){
        
    // }

    setSpeed(bpmBox, audio){

        audio.playbackRate = bpmBox.value;
        // console.log(song.playbackRate);

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







        // let source;

        // source = context.createBufferSource();
        // const request = new XMLHttpRequest();
      
        // request.open("GET", "instrumentals/tgif.mp3", true);
      
        // request.responseType = "arraybuffer";
      
        // request.onload = () => {
        //   const audioData = request.response;
      
        //   context.decodeAudioData(
        //     audioData,
        //     (buffer) => {
        //       source.buffer = buffer;
      
        //       source.connect(context.destination);
        //       source.loop = true;
        //     },
      
        //     (err) => console.error(`Error with decoding audio data: ${err.err}`)
        //   );
        // };
      
        // request.send();
        // source.start(0);

        // debugger