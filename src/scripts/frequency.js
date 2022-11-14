class Frequency{

    constructor(context, bpmBox, audio){
        this.context = context;
        this.bpmBox = bpmBox;
        this.audio = audio;
        //set interval or timeout thing for typing in the box, with play/pause as the disruptor. 
        // this.fillBox(this.context, this.bpmBox);
        this.createAudioBufferSourceNode(context);
    }

    // fillBox(context, bpmBox){
        
    // }

    createAudioBufferSourceNode(context, audio){
        let source = context.createBufferSource();
        audio = new ArrayBuffer(audio);

        context.decodeAudioData(audio, (buffer) => {
            buffered = buffer;
            source.buffer = buffered;
            source.playbackRate.value = 200;
            source.connect(context.destination);
        })
        
        console.log(source);
    }
    
}

export default Frequency;