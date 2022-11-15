class VocalSpeed{

    constructor(audio, obj){
        this.bpmSlider = document.getElementById("vocalBPM");
        this.obj = obj;
        this.bpmSlider.value = this.obj.getAttribute("data-bpm");
        this.audio = audio;
        this.bpmLabel = document.getElementById("vocalLabel");
        this.bpmLabel.innerHTML = this.bpmSlider.value;
        this.bpmSlider.addEventListener("change", this.setSpeed.bind(this));
    }

    setSpeed(){

        this.bpmLabel.innerHTML = this.bpmSlider.value;

        this.audio.playbackRate = this.bpmConversion(this.bpmSlider.value);

    }

    bpmConversion(bpm){

        let rate = (bpm*1.0) / (parseInt(this.obj.getAttribute("data-bpm"))*1.0);

        return rate;
        
    }
}

export default VocalSpeed;
