function createChessBoard(size) {
    let board = "";
    for (i = 0; i <= size; i++) {
        for (n = 0; n <= size; n++) {
            if ((i + n) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
    board += "\n"
    }
    console.log(board);
}

createChessBoard(8);