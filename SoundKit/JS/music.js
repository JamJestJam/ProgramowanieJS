class Music{
    constructor(musicSrc, key){
        this.key = key;
        this.music = new Audio(musicSrc);
        
    }

    Play(code){
        if(code == this.key){
            this.music.currentTime = 0;
            this.music.play();
            return true;
        }
        return false;
    }
}

export {Music};