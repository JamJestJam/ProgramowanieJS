/* eslint-disable no-prototype-builtins */

(function () {
    const tableSongs = {
        'KeyQ': new Audio('./music/boom.wav'),
        'KeyW': new Audio('./music/clap.wav'),
        'KeyE': new Audio('./music/hihat.wav'),
        'KeyR': new Audio('./music/kick.wav'),
        'KeyT': new Audio('./music/openhat.wav'),
        'KeyS': new Audio('./music/ride.wav'),
        'KeyD': new Audio('./music/snare.wav'),
        'KeyF': new Audio('./music/tink.wav'),
        'KeyG': new Audio('./music/tom.wav'),
    };
    const tableKeys = {
        'Space': startStopRecord,
        'Enter': playMusic,
        'Numpad2': prevMS,
        'Numpad8': nextMS
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
                const music = musicList.options[musicList.options.length - 1];
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
            const name = recordName.value;

            const option = new Option();
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
        const nr = musicList.options.selectedIndex;
        const music = musicList.options[nr].arrayMusic;

        if (nr == 0) {
            alert('no track selected');
            return;
        }

        music.forEach(element => {
            setTimeout(() => play(element.Song), element.Date);
        });
    }

    function play(music) {
        music.currentTime = 0;
        music.play();
    }

    function stopPropagation(e) {
        e.stopPropagation();
    }

    function nextMS() {
        let tmp = musicList.options;
        if (tmp.selectedIndex < tmp.length - 1)
            tmp.selectedIndex++;
    }

    function prevMS() {
        let tmp = musicList.options;
        if (tmp.selectedIndex > 1)
            tmp.selectedIndex--;
    }
})();