class MusicBox{
    constructor(){
        this.SongArray = [];
    }

    push(ele){
        this.SongArray.push(ele);
    }

    play(key){
        this.SongArray.forEach(ele => {
            if(ele.Play(key))
                return true;
        });
        return false;
    }
}

const musicBox = new MusicBox();

export {musicBox};