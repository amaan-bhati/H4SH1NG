var customSortString = function (order, s) {
    let res = ""
    let res2 = s
    for (let i = 0; i < order.length; i++) {
        for (let j = 0; j < s.length; j++) {
            if (order[i] == s[j]) {
                res = res + order[i]
                res2 = res2.replace(s[j], "")
            }
        }
    }
    return res + res2

};
