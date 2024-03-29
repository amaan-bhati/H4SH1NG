var leastBricks = function (wall) {
    let map = {};
    let maxCount = 0;

    for (let row of wall) {
        let sum = 0;
        for (let i = 0; i < row.length - 1; i++) {
            sum += row[i];
            map[sum] = map[sum] + 1 || 1;
            maxCount = Math.max(maxCount, map[sum]);
        }
    }
    return wall.length - maxCount;
};
