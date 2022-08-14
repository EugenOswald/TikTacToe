let fields = [];

let currentShape = 'cross'

function fillShape(id) {
    if (currentShape == 'cross') { // mit dieser if abfrage wird abwechselnd cross und circle in den Array geschoben
        currentShape = 'circle';
    } else {
        currentShape = 'cross';
    };
    fields[id] = currentShape;
    console.log(fields);
    draw()
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