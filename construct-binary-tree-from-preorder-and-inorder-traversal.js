/**
 * @param {character[][]} board
  * @return {boolean}
   */
var isValidSudoku = function (board) {
    const rows = new Array(9).fill(0).map(() => new Set());
    const cols = new Array(9).fill(0).map(() => new Set());
    const boxes = new Array(9).fill(0).map(() => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j];
            if (cell !== '.') {
                if (rows[i].has(cell) || cols[j].has(cell) || boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(cell)) {
                    return false;
                }
                rows[i].add(cell);
                cols[j].add(cell);
                boxes[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(cell);
            }
        }
    }

    return true;
};
                                                                                                                                                                
