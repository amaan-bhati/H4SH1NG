var isValidSudoku = function (board) {
    const row = {};
    const col = {};
    const box = {};
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val != ".") {
                const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (row[`${i}-${val}`] || col[`${j}-${val}`] || box[`${boxIndex}-${val}`]) {
                    return false;
                }
                row[`${i}-${val}`] = true;
                col[`${j}-${val}`] = true;
                box[`${boxIndex}-${val}`] = true;
            }
        }
    }
    return true;

};
