class BeatMatch{

    constructor(bmButton, playbackInst, playbackVoc, freq){
        this.bmButton = bmButton;
        this.playbackInst = playbackInst;
        this.playbackVoc = playbackVoc;
        this.freq = freq;

        this.bmButton.addEventListener("click", this.matchBeats.bind(this));
    }

    matchBeats(){

        setInterval(()=>{
        this.playbackInst.value = this.playbackVoc.value;
        this.freq.setSpeed();
            }, 0.01);
    }

}

export default BeatMatch;