class FetchVocal {
    constructor(select, play){
        this.select = select;
        this.play = play;
        this.audio;
        this.select.addEventListener("change", this.setSong.bind(this));
        this.play.addEventListener("click", this.playFunc.bind(this));
    }

    playFunc(){

        let state = this.play.getAttribute("data-playing");

        if (state === "paused"){
            this.play.setAttribute("data-playing", "playing")
            this.audio.play()
        } else{
            this.play.setAttribute("data-playing", "paused");
            this.audio.pause();
        }

    }

    setSong(ele){

        //selecting play/pause on 'select isntrumental' will make it be paused so that when you select a song it begins in the paused state

        if (this.audio){
            this.audio.pause();
            this.play.setAttribute("data-playing", "paused");
        }

        let song = ele.target.value;

        let audio = new Audio(`vocals/${song}.mp3`);
        
        let context = new AudioContext();

        const source = context.createMediaElementSource(audio);
        source.connect(context.destination);

        this.audio = audio;
        }
    
    // this.ele.children[0].innerText = "Ouch!";
}

export default FetchVocal;