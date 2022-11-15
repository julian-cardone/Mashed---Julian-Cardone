class PlayBoth{

    constructor(playBoth, inst, voc){
        this.playBoth = playBoth;
        this.inst = inst;
        this.voc = voc;
        this.playBoth.addEventListener("click", this.playBothNow.bind(this));
    }

    playBothNow(){
        this.inst.playFunc();
        this.voc.playFunc();
    }
}

export default PlayBoth;
import FetchInstrumental from "./fetch_instrumental";
import FetchVocal from "./fetch_vocal";


// this.middle = document.querySelector(".middle");
// this.label = document.getElementById("instrumentalLabel");

// this.middle.style.background = "black";
// this.label.style.color = "bisque";

// this.middle.style.background = "gray";
// this.label.style.color = "black";

// this.middle = document.querySelector(".middle");
// this.label = document.getElementById("vocalLabel");