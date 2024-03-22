var frequencySort = function (s) {
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    let sortedarr = [...map.entries()].sort((a, b) => b[1] - a[1]);
    let res = '';
    for (let arr of sortedarr) {
        res += arr[0].repeat(arr[1]);
    }
    return res;
};
