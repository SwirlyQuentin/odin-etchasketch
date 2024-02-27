let boardSize = 16;
let board = document.querySelector(".game-board");
let info = document.querySelector(".error");

function setSize(){
    const textInput = document.querySelector(".board-size");
    let size = parseInt(textInput.value);
    if (isNaN(size)){
        info.textContent = "Please insert a number";
        return;
    }
    info.textContent = "Created!";
    boardSize = size;
    createBoard();
}

function createBoard(){
    board.innerHTML = "";
    const boardDiv = document.querySelector(".game-board");

    for (let i = 0; i < boardSize; i++){
        let row = document.createElement("div");
        board.appendChild(row);
        row.classList.add("row");
        row.style.width = 1/boardSize*100 + "%"

        for (let j = 0; j < boardSize; j++){
            let newBox = document.createElement("div");
            row.appendChild(newBox);
            newBox.classList.add("square");
            newBox.style.height = 1/boardSize*100 + "%"

            newBox.addEventListener("mouseover", function(){
                newBox.style.backgroundColor = "black";
            });
        }
        board.appendChild(document.createElement("br"));
    }

}

function clearBoard(){
    createBoard();
    info.textContent = "Cleared!"
}


