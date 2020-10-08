var name = 'janek';
var nazwisko = 'kos';

function log(...msgs){
    if(msgs){
        msgs.forEach(function(element){
            console.log(element);
        });
    }
}

function varTest(){
    var x = 1;
    if(true){
        var x = 2;
        log(x);
    }
    log(x);
}

