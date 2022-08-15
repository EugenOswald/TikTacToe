let fields = [];

let currentShape = 'cross'

function fillShape(id) {
    if (!fields[id]) {// wenn noch nichts in id steht kommt fales und die if abfrage wird nicht durchgeführt. Mit ! wird die aussage negiert und aus fales wir true und anders rum.
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
    }
    if (fields[4] == fields[5] && fields[5] == fields[6] && fields[4]) {
        winner = fields[4];
    }

    if (fields[7] == fields[8] && fields[8] == fields[9] && fields[7]) {
        winner = fields[7];
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
    }

    if (winner) {
        console.log('Gewonnen', winner);
    }


}