
var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "1---",
    "2--1",
    "---3",
    "32-4"
]

var solution = [
    "1342",
    "2431",
    "4123",
    "3214"
]

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-4
    for (let i = 1; i<=4; i++) {
        let number = document.createElement("div");
        number.id = i
        number.innerText = i;
        number.addEventListener("click", selectNumber)
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 4x4
    for (let r = 0; r < 4; r++) {
        for (let c=0; c < 4; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            if (board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            if (r == 1) {
                tile.classList.add("horizontal-line");
            }
            if (c == 1) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    if (numSelected) {
        if (this.innerText != "") {
            return;
        }


        let coords = this.id.split("-");
        let r = parseInt(coords[0]);
        let c = parseInt(coords[1]);

        if (solution[r][c] == numSelected.id) {
            this.innerText = numSelected.id;
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}