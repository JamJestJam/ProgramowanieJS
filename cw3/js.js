const table = {
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
//const recordedSounds[];
//let recordStartTime;
document.addEventListener('keypress', logKey);

function logKey(e) {
    if(table.hasOwnProperty(e.code)){
        new Audio('./music/' + table[e.code]).play();
    }
    
}