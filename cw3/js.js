/* eslint-disable no-prototype-builtins */
const tableSongs = {
    'KeyQ': 'boom.wav',
    'KeyW': 'clap.wav',
    'KeyE': 'hihat.wav',
    'KeyR': 'kick.wav',
    'KeyT': 'openhat.wav',
    'KeyS': 'ride.wav',
    'KeyD': 'snare.wav',
    'KeyF': 'tink.wav',
    'KeyG': 'tom.wav',
};
const tableKeys = {
    'Space': startStopRecord,
    'Enter': playMusic
};
const playBTN = document.querySelector('#play');
const recordBTN = document.querySelector('#record');
const recordName = document.querySelector('#RecordName');
const musicList = document.querySelector('#music');

document.addEventListener('keypress', keyPress);
recordBTN.addEventListener('click', startStopRecord);
recordName.addEventListener('keypress', stopPropagation);
playBTN.addEventListener('click', playMusic);

function keyPress(e) {
    if (tableSongs.hasOwnProperty(e.code)) {
        play(tableSongs[e.code]);

        if (recordBTN.innerHTML == 'Stop') {
            let music = musicList.options[musicList.options.length - 1];
            music.arrayMusic.push({
                'Date': Date.now() - music.startMusic,
                'Song': tableSongs[e.code]
            });
        }
    } else if (tableKeys.hasOwnProperty(e.code)) {
        tableKeys[e.code]();
    }
}

function startStopRecord() {
    if (recordBTN.innerText == 'Record') {
        let name = recordName.value;
        if (name == '') {
            alert('You have to name the recording');
            return;
        }

        let option = new Option();
        option.value = name;
        option.text = name;
        option.startMusic = Date.now();
        option.arrayMusic = new Array();
        musicList.options.add(option);

        recordBTN.innerHTML = 'Stop';
    } else {
        recordBTN.innerHTML = 'Record';
    }
}

function playMusic() {
    let nr = musicList.options.selectedIndex;
    let music = musicList.options[nr].arrayMusic;

    if (nr == 0) {
        alert('no track selected');
        return;
    }

    music.forEach(element => {
        setTimeout(() => play(element.Song), element.Date);
    });
}

function play(musicName) {
    let tmp = new Audio('./music/' + musicName);
    tmp.play();
}

function stopPropagation(e) {
    e.stopPropagation();
}