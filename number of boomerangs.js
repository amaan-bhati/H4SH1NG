var numberOfBoomerangs = function (points) {
    let count = 0;
    for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        const map = new Map();
        for (let j = 0; j < points.length; j++) {
            const p2 = points[j];
            const dist = (p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2;
            const countDists = (map.get(dist) ?? 0);
            count += 2 * countDists;
            map.set(dist, countDists + 1);
        }
    }
    return count;
};
