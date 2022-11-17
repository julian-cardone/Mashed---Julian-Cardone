class BeatMatch{

    constructor(bmButton, playbackInst, playbackVoc, freq){
        this.bmButton = bmButton;
        this.playbackInst = playbackInst;
        this.playbackVoc = playbackVoc;
        this.freq = freq;

        // this.instObj = instObj;
        // this.vocObj = vocObj;
        // this.speedInst = document.getElementById("instrumentalLabel").innerHTML;
        // this.speedVoc = document.getElementById("vocalLabel").innerHTML;

        // this.bmButton.addEventListener("click", console.log("test"));
        this.bmButton.addEventListener("click", this.matchBeats.bind(this));
        // debugger;
        // this.playbackVoc.addEventListener("change", this.freq.setSpeed.bind(this));
    }

    matchBeats(){
        // this.playbackInst.value = this.playbackVoc.value;
        // if (this.playbackInst.value > this.playbackVoc.value){
        //     this.playbackVoc.value = this.playbackInst.value;
        //     this.vocObj.setSpeed();
        // } else {
        //     this.playbackInst.value = this.playbackVoc.value;
        //     this.instObj.setSpeed();
        // }
        setInterval(()=>{
        this.playbackInst.value = this.playbackVoc.value;
        this.freq.setSpeed();
            }, 0.01);
    }

}

export default BeatMatch;