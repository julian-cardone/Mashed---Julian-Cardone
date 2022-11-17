class BeatMatch{

    constructor(bmButton, playbackInst, playbackVoc){
        this.bmButton = bmButton;
        this.playbackInst = playbackInst;
        this.playbackVoc = playbackVoc;

        // this.instObj = instObj;
        // this.vocObj = vocObj;
        // this.speedInst = document.getElementById("instrumentalLabel").innerHTML;
        // this.speedVoc = document.getElementById("vocalLabel").innerHTML;

        // this.bmButton.addEventListener("click", console.log("test"));
        this.bmButton.addEventListener("click", this.matchBeats.bind(this));
        // debugger;
    }

    matchBeats(){
        // debugger
        if (this.playbackInst.value > this.playbackVoc.value){
            this.playbackVoc.value = this.playbackInst.value;
            this.playbackVoc.setSpeed();
        } else {
            this.playbackInst.value = this.playbackVoc.value;
            this.playbackInst.setSpeed();
        }
    }

}

export default BeatMatch;