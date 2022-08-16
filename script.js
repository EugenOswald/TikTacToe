let fields = [];
let gameOver = false;
let currentShape = 'cross'

function fillShape(id) {
    if (!fields[id] && !gameOver) {// wenn noch nichts in id steht kommt fales und die if abfrage wird nicht durchgeführt. Mit ! wird die aussage negiert und aus fales wir true und anders rum. Wenn gameOver False ist wird weiter geschrieben und wenn es zu true wird kann man nicht mehr klicken
        if (currentShape == 'cross') { // mit dieser if abfrage wird abwechselnd cross und circle in den Array geschoben
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inaktiv');
            document.getElementById('player-1').classList.add('player-inaktiv');

        } else {
            document.getElementById('player-1').classList.remove('player-inaktiv');
            document.getElementById('player-2').classList.add('player-inaktiv');

            currentShape = 'cross';


        };
        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }

    }
}

function checkForWin() {

    let winner;
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'scaleX(1) rotate(90deg)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'scaleX(1) rotate(90deg)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'scaleX(1) rotate(90deg)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'scaleX(1.1) rotate(45deg)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'scaleX(1.1) rotate(135deg)';
    }

    if (winner) {
        console.log('Gewonnen', winner);
        gameOver = true;
        setTimeout(function(){  // Mit dieser Function verzögrt sich die anweisung d-none
            document.getElementById('game-over').classList.remove('d-none');
            document.getElementById('restart-btn').classList.remove('d-none');
        }, 1200);
        
    }


}

function restart(){
    gameOver = false; 
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    for(let i=1; i<8; i++){
        document.getElementById('line-' +i).classList.add('d-none'); // um diese formel für alle 8 line- zuerstellen kann mit dieser for schleife es automatiesieren
    }
    for(let i=0; i<9; i++){
        document.getElementById('circle-' +i).classList.add('d-none'); 
        document.getElementById('cross-' +i).classList.add('d-none'); 
    }
}