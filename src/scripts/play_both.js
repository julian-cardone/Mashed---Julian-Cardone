class PlayBoth{

    constructor(playBoth, inst, voc){
        this.playBoth = playBoth;
        this.inst = inst;
        this.voc = voc;
        this.playBoth.addEventListener("click", this.playBothNow.bind(this));

        this.middle = document.querySelector(".middle");
        this.label = document.getElementById("instrumentalLabel");
        this.vocLabel = document.getElementById("vocalLabel");

        this.instBPM = document.getElementById("instrumentalLabel");
    }

    playBothNow(){
        this.inst.playFunc();
        this.voc.playFunc();
        let colors = {
            r: 0,
            g: 0,
            b: 0
        };
        if (!this.inst.isPlaying()){
            this.label.style.color = "bisque";
            this.vocLabel.style.color = "bisque";
            this.playBoth.innerHTML = "Pause Both!"
            const id = setInterval(()=>{
            let newColors = this.randomizer(colors);
                this.middle.style.background = `rgb(${newColors["r"]},${newColors["g"]},${newColors["b"]})`;
                if (this.inst.isPlaying()){
                    clearInterval(id);
                    this.middle.style.background = "gray";
                }
            }, ((60/(this.instBPM.innerHTML))*1000)-100);
        } else {
            this.middle.style.background = "gray";
            this.label.style.color = "black";
            this.vocLabel.style.color = "black";
            this.playBoth.innerHTML = "Play Both!"
        }
    }
    randomizer(colors){
        let realColors = colors;
        realColors["r"] = Math.random()*255;
        realColors["g"] = Math.random()*255;
        realColors["b"] = Math.random()*255;
        return realColors;
    }
}
    // randomizer(colors){
    //     let odds = Math.random();
    //     //pick a random color
    //     let color = Math.random();
    //     let realColors = colors;


    //     if (color < 0.33){
    //         if (odds < 0.5 && colors["r"] > 0){
    //             realColors["r"] = colors["r"] - 1;
    //             return realColors;
    //         } else if (odds >= 0.5 && colors["r"] < 255){
    //             realColors["r"] = colors["r"] + 1;
    //             return realColors;
    //         }
    //     }else if (color >= 0.33 && color < 0.66){
    //         if (odds < 0.5 && colors["g"] > 0){
    //             realColors["g"] = colors["g"] - 1;
    //             return realColors;
    //         } else if (odds >= 0.5 && colors["g"] < 255){
    //             realColors["g"] = colors["g"] + 1;
    //             return realColors;
    //         }
    //     } else {
    //         if (odds < 0.5 && colors["b"] > 0){
    //             realColors["b"] = colors["b"] - 1;
    //             return realColors;
    //         } else if (odds >= 0.5 && colors["b"] < 255){
    //             realColors["b"] = colors["b"] + 1;
    //             return realColors;
    //         }
    //     }
    // }



// const fade = function(middle){
//     r += 1;
//     g += 1;
//     b += 1;
//     middle = `rgb(${r},${g},${b})`;
//     // console.log(this.middle.style.background);
// }
// setInterval(fade(this.middle.style.background), 100);

export default PlayBoth;
// import FetchInstrumental from "./fetch_instrumental";
// import FetchVocal from "./fetch_vocal";

// let r = 0;
// let g = 0;
// let b = 0;
// const fade = setInterval(function(middle){
//     r += 1;
//     g += 1;
//     b += 1;
//     middle = `rgb(${r},${g},${b})`;
//     // console.log(this.middle.style.background);
// }, 100);